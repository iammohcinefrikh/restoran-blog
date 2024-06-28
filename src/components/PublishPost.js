import fileIcon from "../assets/images/file-icon.svg";

const PublishPost = () => {
  return (
    <div className="publish-article-container">
      <h3 className="publish-article-header">Publier un article</h3>
      <div className="input-container">
        <label>Titre de l'article</label>
        <input type="text" placeholder="Titre de l'article" />
      </div>
      <div className="input-container">
        <label>Catégorie d'article</label>
        <select defaultValue={""}>
          <option value={""} disabled>Sélectionner une catégorie</option>
          <option value={"Recettes et conseils de cuisine"}>Recettes et conseils de cuisine</option>
          <option value={"Interviews de chefs"}>Interviews de chefs</option>
          <option value={"Outils et gadgets de cuisine"}>Outils et gadgets de cuisine</option>
          <option value={"Tendances alimentaires"}>Tendances alimentaires</option>
          <option value={"Alimentation saine"}>Alimentation saine</option>
          <option value={"Cuisine internationale"}>Cuisine internationale</option>
          <option value={"Recettes de saison"}>Recettes de saison</option>
          <option value={"Pâtisserie et desserts"}>Pâtisserie et desserts</option>
          <option value={"Techniques de cuisine"}>Techniques de cuisine</option>
          <option value={"Planification et préparation des repas"}>Planification et préparation des repas</option>
        </select>
      </div>
      <div className="input-container">
        <label>Corps de l'article</label>
        <textarea placeholder="Corps de l'article"></textarea>
      </div>
      <div className="input-container">
        <label>Image de l'article</label>
        <label htmlFor="imageUpload" className="file-upload"><img src={fileIcon} />Cliquer pour choisir un fichier</label>
        <input id="imageUpload" type="file" />
      </div>
      <button className="publish-article-button">Soumettre</button>
    </div>
  )
}

export default PublishPost;