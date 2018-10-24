
const Entry = `
type Entry {
  wineName: String
  producer: String
  country: String
  region: String
  vintage: String
  varietals: [String]
  id: ID!
  userId: ID
  notes: String
  tags: [String]
}
`;

export default Entry;
