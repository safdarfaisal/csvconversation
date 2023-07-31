import mpld3
import json
import pandas as pd
import matplotlib.pyplot as plt

# Read the csv file into a pandas DataFrame
data = pd.read_csv('Housing.csv')

# Group the data by the number of bedrooms and calculate the average price
average_price = data.groupby('bedrooms')['price'].mean()

# Plot the graph
plt.plot(average_price.index, average_price.values)
plt.xlabel('Number of Bedrooms')
plt.ylabel('Average Price')
plt.title('Average Price for Number of Bedrooms')

fig = plt.gcf()
mpld3.save_html(fig, r"static/assets/session/graph1.html")
metadata=mpld3.fig_to_dict(fig)

meta_dict = {'width': metadata['width'], 'height':metadata['height']}
with open(r'static/assets/session/graph1.json','w') as f:
    json.dump(meta_dict,f)

plt.close()