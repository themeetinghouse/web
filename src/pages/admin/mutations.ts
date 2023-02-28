export const createVerse = /* GraphQL */ `
  mutation CreateVerse(
    $input: CreateVerseInput!
    $condition: ModelVerseConditionInput
  ) {
    createVerse(input: $input, condition: $condition) {
      id
      createdAt
    }
  }
`;

export const deleteVerse = /* GraphQL */ `
  mutation DeleteVerse(
    $input: DeleteVerseInput!
    $condition: ModelVerseConditionInput
  ) {
    deleteVerse(input: $input, condition: $condition) {
      id
      updatedAt
    }
  }
`;

export const updateNotes = /* GraphQL */ `
  mutation UpdateNotes(
    $input: UpdateNotesInput!
    $condition: ModelNotesConditionInput
  ) {
    updateNotes(input: $input, condition: $condition) {
      id
      updatedAt
    }
  }
`;

export const createNotes = /* GraphQL */ `
  mutation CreateNotes(
    $input: CreateNotesInput!
    $condition: ModelNotesConditionInput
  ) {
    createNotes(input: $input, condition: $condition) {
      id
      createdAt
    }
  }
`;
