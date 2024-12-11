export default function InputField({ type, placeholder, value, onChange, label }) {
    return (
        <div className="mb-4">
            {label && <label className="block mb-1 text-gray-700">{label}</label>}
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
}