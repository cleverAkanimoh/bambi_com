interface InputProps extends React.ComponentProps<"input"> {
    label?: string;
  }
  
  export const Input = ({ label, id, required, ...rest }: InputProps) => {
    return (
      <div className="flex flex-col gap-1 mb-5 last:mb-0">
        {label && (
          <label htmlFor={id} className="text-gray-500">
            {label} {required && <span className="text-red-500">*</span>}
          </label>
        )}
        <input
          id={id}
          required={required}
          className="p-2 w-full border border-gray-400 rounded-md"
          {...rest}
        />
      </div>
    );
  };


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

  interface OrderTileProps {
    title: string;
    price: number;
    quantity: number;
  }
  
  export const OrderTile = ({ title, price, quantity }: OrderTileProps) => (
    <li className={orderStyle}>
      <p className="m-0">
        {title} x {quantity}
      </p>
      <b>${price * quantity}</b>
    </li>
  );