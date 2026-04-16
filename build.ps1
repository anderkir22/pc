# =============================================================================
# build.ps1
# =============================================================================
#
# WHAT IT DOES:
#   Reads the shared head, header, and footer partials from the _partials
#   folder and stamps them into every root .html page that contains the
#   marker comments. Run this any time you edit _partials/head.html,
#   _partials/header.html, or _partials/footer.html.
#
# HOW TO RUN:
#   Double-click run-build.cmd in this same folder.
#
#   Or from a terminal:
#     powershell -NoProfile -ExecutionPolicy Bypass -File .\build.ps1
# =============================================================================

$headerFile = Join-Path $PSScriptRoot "_partials\header.html"
$headFile = Join-Path $PSScriptRoot "_partials\head.html"
$footerFile = Join-Path $PSScriptRoot "_partials\footer.html"

if (-not (Test-Path $headerFile)) { Write-Error "Missing: $headerFile"; Read-Host; exit 1 }
if (-not (Test-Path $headFile)) { Write-Error "Missing: $headFile"; Read-Host; exit 1 }
if (-not (Test-Path $footerFile)) { Write-Error "Missing: $footerFile"; Read-Host; exit 1 }

$headerContent = (Get-Content $headerFile -Raw -Encoding UTF8).Trim()
$headContent = (Get-Content $headFile -Raw -Encoding UTF8).Trim()
$footerContent = (Get-Content $footerFile -Raw -Encoding UTF8).Trim()

function Convert-ToInlineHtml {
    param([string]$Value)

    $inline = [regex]::Replace($Value, "\r?\n\s*", " ")
    return ([regex]::Replace($inline, "\s{2,}", " ")).Trim()
}

$headerInline = Convert-ToInlineHtml $headerContent
$headInline = Convert-ToInlineHtml $headContent
$footerInline = Convert-ToInlineHtml $footerContent

$markers = @(
    @{ Start = '<!-- HEAD_SNIPPETS:START -->'; End = '<!-- HEAD_SNIPPETS:END -->'; Replacement = $headInline },
    @{ Start = '<!-- HEADER:START -->'; End = '<!-- HEADER:END -->'; Replacement = $headerInline },
    @{ Start = '<!-- FOOTER:START -->'; End = '<!-- FOOTER:END -->'; Replacement = $footerInline }
)

$pages = Get-ChildItem -Path $PSScriptRoot -Filter '*.html' -File
$updatedCount = 0

foreach ($page in $pages) {
    $content = Get-Content $page.FullName -Raw -Encoding UTF8
    $updated = $false

    foreach ($marker in $markers) {
        $startEscaped = [regex]::Escape($marker.Start)
        $endEscaped = [regex]::Escape($marker.End)
        $pattern = "(?s)$startEscaped.*?$endEscaped"

        if ($content -match $pattern) {
            $replacementBlock = "$($marker.Start)`r`n$($marker.Replacement)`r`n$($marker.End)"
            $content = [regex]::Replace($content, $pattern, [System.Text.RegularExpressions.MatchEvaluator]{ param($match) $replacementBlock }, 1)
            $updated = $true
        }
    }

    if ($updated) {
        [System.IO.File]::WriteAllText($page.FullName, $content, [System.Text.Encoding]::UTF8)
        $updatedCount++
        Write-Host "Updated $($page.Name)"
    } else {
        Write-Host "Skipped $($page.Name) (no build markers found)"
    }
}

Write-Host ""
Write-Host "Build complete. Updated $updatedCount page(s)."
