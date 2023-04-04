//
const countAndConsoleCategories = () => {
  const categoriesEl = document.querySelectorAll(".item");
  const numberCategoriesEl = categoriesEl.length;

  console.log(`Number of categories: ${numberCategoriesEl}`);

  categoriesEl.forEach((category) => {
    const name = category.querySelector("h2").textContent;
    const quantity = category.querySelectorAll("li").length;

    console.log(`Category: ${name}`);
    console.log(`Elements: ${quantity}`);
  });
};

countAndConsoleCategories();
