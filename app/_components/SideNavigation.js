import Link from "next/link";

function SideNavigation({ items = [] }) {
  return (
    <ul className="flex flex-col  min-w-48 border-r-2 border-primary-900 pt-6 pl-2 pr-4">
      {items?.map((item, index) => (
        <li key={index}>
          <Link
            href={item?.link}
            className="flex items-center gap-3 [&_svg]:text-xl py-2 px-2 rounded-md [&_svg]:text-primary-500 hover:pl-3 hover:bg-primary-900 transition-all duration-300"
          >
            {item?.icon}
            <p> {item?.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default SideNavigation;
