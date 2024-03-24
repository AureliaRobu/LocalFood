function Label({ children }) {
  return (
    <label htmlFor="name" className="block text-sm font-medium text-stone-700">
      {children}
    </label>
  );
}
function Error({ children }) {
  return (
    <span htmlFor="name" className=" text-xs font-medium text-red-700">
      {children}
    </span>
  );
}
function FormRow({ label, error, children }) {
  return (
    <div>
      {label && <Label htmlFor="name">{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </div>
  );
}

export default FormRow;
