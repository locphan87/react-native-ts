# Modules

Main application features

Traditionally, developers structured their React applications by type. This means they had folders like `actions/`, `components/`, `containers/`, etc.

While this works fine for examples, once you have hundreds or potentially thousands of components, development becomes very hard. To add a feature, you would have to search for the correct file in half a dozen different folders with thousands of files. This would quickly become tedious, and confidence in the code base would wane.

Instead of grouping the files of your application by type, group them by feature! That is, put all files related to one feature in the same folder.

Let’s look at what the folder structure would look like for our `GoalList` example:

## Code structure

Naming convention:
* Screen component (stateful) `<MODULE_NAME>.screen.tsx`
* UI view component `<MODULE_NAME>.view.tsx`
* Form component `<MODULE_NAME>.form.tsx`
* State selector for screen component `<MODULE_NAME>.selector.tsx`
* lifecycle callbacks for screen component `<MODULE_NAME>.lifecycle.tsx`
* Event handlers for screen component `<MODULE_NAME>.handler.tsx`
* Module's reducer `<MODULE_NAME>.reducer.tsx`
* Style `<MODULE_NAME>.<UI_TYPE>.style.tsx`
* Test `<MODULE_NAME>.<TEST_TYPE>.test.tsx`
* GraphQL queries`<SEMANTIC_QUERY_NAME>.query.tsx` in Query directory
* GraphQL mutations`<SEMANTIC_MUTATION_NAME>.mutation.tsx` in Mutation directory

```
UI_TYPE = component | view | form
TEST_TYPE = component
  | view
  | form
  | handler
  | selector
```

```
./src/modules/GoalList/
├── Mutation
│   ├── updateGoalStatus.mutation.tsx
│   ├── deleteGoal.mutation.tsx
├── Query
│   ├── getGoalList.query.tsx
├── GoalList.form.tsx
├── GoalList.form.style.tsx
├── GoalList.handler.tsx
├── GoalList.reducer.tsx
├── GoalList.screen.tsx
├── GoalList.selector.tsx
├── GoalList.lifecycle.tsx
├── GoalList.view.tsx
├── GoalList.view.style.tsx
└── MyModuleComponent1.component.tsx
└── MyModuleComponent2.component.tsx
└── __test__
```

Developers working on this application would need to go into only a single folder to work on something. And they would need to create only a single folder to add a new feature. Renaming is easy with find and replace, and hundreds of developers could work on the same application at once without causing any conflicts!

Note:
* We have many files in this directory so it's reasonable to have a separate test folder.
* It's common that a view component define and use smaller components in the same module (organized in separate folders, i.e `MyModuleComponent1` and `MyModuleComponent2`)

## GraphQL query

Each query has to export at least 2 things: `query` and `params`

```js
// getGoalList.query.tsx
const query = gql``
const params = {
  options: {
    variables: {
      id: '123'
    }
  }
}

export default { query, params }
```

### Usage
```js
const enhance = compose(
  graphql(getGoalList.query, getGoalList.params)
)
```

## GraphQL mutation

Each mutation has to export at least 2 things: `mutation` and `params`

```js
// updateGoalStatus.mutation.tsx
const mutation = gql``
const params = {
  options: {
    variables: {
      id: '123'
    }
  }
}

export default { mutation, params }
```

### Usage
```js
const enhance = compose(
  graphql(updateGoalStatus.mutation, updateGoalStatus.params)
)
```
