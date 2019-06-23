import csv
import urllib.request
k = urllib.request.urlopen("https://gaia.blockstack.org/hub/1JE69BrdRVgVCWzjbRxVB3Uak22ebFBfu5/rajathav.id.blockstack/1.json").read()
#edit the above url with the credentials you get from apps:{} section in your profile.json from the Gaia hub
#https://gaia.blockstack.org/hub/api/ID/filename.json"
import json
k=str(k)
r=k.split("\\\\t")
x=r[0]
y=x.split('\\')
y=y[-3].split('"')
l=k[-1].split('\"}"')
k=[]
k.append('4')
k.append('')
k.append(y[1])
for i in range(1,(len(r))):
        g=r[i].split("\\")[0]
        k.append(float(g))
with open('Test.csv', 'a') as csvFile:
    writer = csv.writer(csvFile)
    writer.writerow(k)
