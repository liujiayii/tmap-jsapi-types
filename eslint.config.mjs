import antfu from "@antfu/eslint-config";

export default antfu({
  type: 'lib',
  stylistic: {
    semi: true,
    indent: 2,
    quotes: "double",
  },
  typescript: true,
  formatters: true,
},);
