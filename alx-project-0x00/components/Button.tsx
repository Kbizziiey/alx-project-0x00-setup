import { ButtonProps } from "@/interfaces";

function Button({title, styles}: ButtonProps) {
  return (
    <div>
        <button className={`py-3 px-3 bg-amber-300 text-white ${styles}`}>
            {title}
        </button>
    </div>
  );
}

export default Button;