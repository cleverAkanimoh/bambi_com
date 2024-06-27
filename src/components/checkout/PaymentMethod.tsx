"use client"

interface PaymentMethodProps extends React.ComponentProps<"input"> {
    label?: string;
}

export const PaymentMethod = ({
    label,
    id,
    required,
    ...rest
}: PaymentMethodProps) => {
    return (
        <div className="flex items-center gap-3 mt-6">
            <input id={id} type="radio" required={required} {...rest} />
            {label && (
                <label htmlFor={id} className="text-gray-500">
                    {label}
                </label>
            )}
        </div>
    );
};
