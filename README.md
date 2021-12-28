# SPO File Upload

Upload a file, or files, to SharePoint Online using the `spsave` package.

## Inputs

`site_url`: Destination SPO site URL  
`username`: SPO account username. **Must have write privileges on the designated site.**  
`password`: SPO account password.  
`destination_path`: Relative destination path on SPO site. If path does not exist, it will be created.  
`source_path`: Source file path(s) to be uploaded to SPO. Separate multiple files using a semicolon `;`.  

## Assumptions

- Files are directly uploaded via the `glob` method in the `spsave` package.
- SPO account must not have multi-factor authentication turned on, or must use an application-specific password. Service accounts are preferred.
- Multiple files are uploaded to the same destination path.

## Example Usage

```yaml
...

uses: justinmclawhorn/spo-file-upload@v1
with:
  site_url: https://domain.sharepoint.com/sites/my-site
  username: ${{ secrets.SPO_USERNAME }}
  password: ${{ secrets.SPO_PASSWORD }}
  destination_path: Shared Documents
  source_path: dist/my-file.txt
  # or for multiple files
  # source_path: dist/my-file1.txt;dist/my-file2.txt

...
```