import Cover from "../../shared/Cover/Cover";
import MenuItem from "../../shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, coverImage, content }) => {
  return (
    <div>
      {/* Cover Start */}
      { title &&
        <Cover
          img={coverImage}
          heading={title}
          content={content}
        ></Cover>
      }
      {/* Cover End */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} ></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
