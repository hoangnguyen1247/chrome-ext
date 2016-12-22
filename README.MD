To package an extension:

1. Bring up the Extensions management page by going to this URL:
   chrome://extensions
2. Ensure that the "Developer mode" checkbox in the top right-hand corner is checked.
3. Click the Pack extension button. A dialog appears.
4. In the Extension root directory field, specify the path to the extension's folder—for example,
   C:\myext. (Ignore the other field; you don't specify a private key file the first time you package a
   particular extension.)
5. Click Package. The packager creates two files: a .crx file, which is the actual extension that
   can be installed, and a .pem file, which contains the private key.