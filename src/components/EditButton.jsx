import EditIcon from "@mui/icons-material/Edit";

export const EditButton = ({ onEdit, title = "Editar", className = "" }) => {
  return (
    <button
      onClick={onEdit}
      title={title}
      className={`
        inline-flex items-center justify-center
        w-8 h-8 
        bg-yellow-500 hover:bg-yellow-600 
        text-white 
        rounded-md 
        transition-colors duration-200
        focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2
        ${className}
      `}
    >
      <EditIcon className="w-4 h-4" />
    </button>
  );
};
