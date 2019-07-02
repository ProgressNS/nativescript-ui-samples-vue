export const getItemList = (count: Number) => {
  let itemList = [];
  for (let i = 1; i <= count; i++) {
    itemList.push({
      id: i,
      name: `Item ${i}`,
      description: `Item ${i} description`,
    });
  }
  return itemList;
};

export const simpleItemList = getItemList(20);
export const simpleItemList100 = getItemList(100);
