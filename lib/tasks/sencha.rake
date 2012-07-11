task :sencha do
  rm_rf "public/s"
  sh "cd public/tz && sencha app build -e production ../s"
end
