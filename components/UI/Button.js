// components/UI/Button.js
export default function Button({ children, onClick, type = "button", className }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`mt-4 w-full p-2 rounded-md text-white ${className}`}
        >
            {children}
        </button>
    );
}