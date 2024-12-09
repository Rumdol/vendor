// components/UI/Alert.js
export default function Alert({ message, type }) {
    const alertStyles = {
        success: 'bg-green-100 text-green-700',
        error: 'bg-red-100 text-red-700',
    };

    return (
        <div className={`p-4 mb-4 rounded-md ${alertStyles[type]}`}>
            {message}
        </div>
    );
}