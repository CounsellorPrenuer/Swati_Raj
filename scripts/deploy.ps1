Remove-Item -Recurse -Force _next -ErrorAction SilentlyContinue
Remove-Item -Force index.html, 404.html, .nojekyll -ErrorAction SilentlyContinue
Copy-Item -Path "out\*" -Destination "." -Recurse -Force
git add .
git commit -m "Deploy static site from updated Sanity content"
git push
