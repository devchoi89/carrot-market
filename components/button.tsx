interface ButtonProps {
  text: string;
  [key: string]: any;
}

function cls(...classnames: string[]) {
  return classnames.join(" ");
}

export default function Button({ text, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={cls(
        "mt-5 py-2 w-full text-center rounded-lg bg-indigo-400 text-white"
      )}
    >
      {text}
    </button>
  );
}
