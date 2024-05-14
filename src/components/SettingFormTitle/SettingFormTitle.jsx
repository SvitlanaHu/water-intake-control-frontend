export const SettingFormTitle = ({ children, margin = 0 }) => {
  return (
    <h3
      style={{
        marginBottom: `${margin}px`,
        fontWeight: "700",
        fontSize: "16px",
        lineHeight: "1.25",
      }}
    >
      {children}
    </h3>
  );
};
