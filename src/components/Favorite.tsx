import { Form } from "react-router-dom";
import { FavoriteProps } from "../routes/Contact";


const Favorite = ({ contact }: FavoriteProps ) => {
  let favorite = contact.favorite;
  return (
    <Form method="post">
    <button
      name="favorite"
      value={favorite ? "false" : "true"}
      aria-label={
        favorite
          ? "Remove from favorites"
          : "Add to favorites"
      }
    >
      {favorite ? "★" : "☆"}
    </button>
  </Form>
);
  
}

export default Favorite;