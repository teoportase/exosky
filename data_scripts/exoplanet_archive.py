import pyvo as vo

archive = vo.dal.TAPService("https://exoplanetarchive.ipac.caltech.edu/TAP")

# Example to see if extracting data works
resultset = archive.search("SELECT TOP 5 * FROM ps")

print(resultset)