import Category from "./Category";

const Categories = () => {
  return (
    <div className="categories-container">
      <h3 className="category-header">Catégories</h3>
      <div className="category-categories-container">
        <Category categoryName="Recettes et conseils de cuisine" />
        <Category categoryName="Interviews de chefs" />
        <Category categoryName="Outils et gadgets de cuisine" />
        <Category categoryName="Tendances alimentaires" />
        <Category categoryName="Alimentation saine" />
        <Category categoryName="Cuisine internationale" />
        <Category categoryName="Recettes de saison" />
        <Category categoryName="Pâtisserie et desserts" />
        <Category categoryName="Techniques de cuisine" />
        <Category categoryName="Planification et préparation des repas" />
      </div>
    </div>
  )
}

export default Categories;