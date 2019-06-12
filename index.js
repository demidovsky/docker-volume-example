const fs = require('fs');

if (fs.existsSync('/tmp/voltest/test.txt')) {
  let content = fs.readFileSync('/tmp/voltest/test.txt', 'utf-8', 'w');
  console.log('before:', content);
  fs.writeFileSync('/tmp/voltest/test.txt', `${content}1`);
  content = fs.readFileSync('/tmp/voltest/test.txt', 'utf-8', 'w');
  console.log('after:', content);
} else {
  console.log('no folder');
}
