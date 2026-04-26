const Card = ({
  image,
  title,
  subtitle,
  description,
  status,
  children,
  onClick,
}) => {
  return (
    <div
      className="
w-[280px]
rounded-2xl
p-4
bg-white dark:bg-slate-800

border
border-gray-100
dark:border-slate-600

shadow-md
dark:shadow-none

hover:shadow-2xl
dark:hover:border-slate-400

transition
"
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-[220px] object-cover rounded-xl"
        />
      )}

      <div className="mt-4 flex flex-col gap-3">
        {title && (
          <h2 className="text-lg font-bold text-gray-800 dark:text-white">
            {title}
          </h2>
        )}

        {subtitle && (
          <p className="text-sm text-gray-500 dark:text-gray-300">{subtitle}</p>
        )}

        {description && (
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            {description}
          </p>
        )}

        {status && (
          <span className="text-xs font-semibold px-2 py-1 rounded w-fit bg-gray-200 text-gray-600">
            {status}
          </span>
        )}

        {children}

        {onClick && (
          <button
            onClick={onClick}
            className="mt-2 w-full bg-blue-500 text-white py-2 rounded-lg"
          >
            Action
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
