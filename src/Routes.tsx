// import ConditionalAuthHOC from './components/ConditionalAuthHOC'

// const DefaultConditionalAuthHOC = ConditionalAuthHOC({ NotLoggedIn, NotAuthorized })

// const Routes = () => (
//   <Switch>
//     <Route exact path="/" component={Intro} />
//     <Route exact path="/logIn" component={LogInPage} />
//     <Route exact path="/userProfile" component={userProfile} />
//     <Route exact path="/logOut" component={LogOutPage} />
//     <Route exact path="/contacts"
//       component={DefaultConditionalAuthHOC([
//         [['contact-list-view', 'contact-edit'], EditableContactsPage],
//         [['contact-list-view'], ReadonlyContactsPage],
//       ])} />
//     <Route path="/contacts/new"
//       component={DefaultConditionalAuthHOC([[['contact-edit'], ContactCreatePage]])} />
//     <Route exact path="/contacts/edit/:id"
//       component={DefaultConditionalAuthHOC([[['contact-view', 'contact-edit'], ContactEditPage]])} />
//     <Route exact path="/contacts/view/:id"
//       component={DefaultConditionalAuthHOC([[['contact-view'], ContactViewPage]])} />
//     <Route path="/settings" component={SettingsPage} />
//     <Route path="/dev" component={DevPage} />
//     <Route component={NotFound} />
//   </Switch>
// )

// export default Routes

export {}
