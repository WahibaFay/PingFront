import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WrongWayComponent } from './general/wrong-way/wrong-way.component';
import { OfferCompanyComponent } from './company/offer-company/offer-company.component';
import { PingComponent } from './company/ping/ping.component';
import { PriceComponent } from './company/price/price.component';
import { ProfileCompanyComponent } from './company/profile-company/profile-company.component';
import { SearchCompanyComponent } from './company/search-company/search-company.component';
import { SelectionCardComponent } from './layouts/selection-card/selection-card.component';
import { SignInComponent } from './company/sign-in/sign-in.component';
import { SignUpComponent } from './company/sign-up/sign-up.component';
import { DashboardUserComponent } from './user/dashboard-user/dashboard-user.component';
import { IdentificationUserComponent } from './user/identification-user/identification-user.component';
import { ProfileUserComponent } from './user/profile-user/profile-user.component';
import { SearchUserComponent } from './user/search-user/search-user.component';
import { HomeComponent } from './general/home/home.component';
import { SelectionCompanyComponent } from './company/selection-company/selection-company.component';
import { OfferUserComponent } from './user/offer-user/offer-user.component';
import { CguComponent } from './general/cgu/cgu.component';
// Resolvers
import { CompanyResolver } from './resolvers/company.resolver';
import { CompanyUserResolver } from './resolvers/companyUser.resolver';
import { ContractTypeResolver } from './resolvers/contractType.resolver';
import { KeyWordResolver } from './resolvers/keyWord.resolver';
import { OfferResolver } from './resolvers/offer.resolver';
import { PingResolver } from './resolvers/ping.resolver';
import { RoleResolver } from './resolvers/role.resolver';
import { SelectionResolver } from './resolvers/selection.resolver';
import { StatusResolver } from './resolvers/status.resolver';
import { TagResolver } from './resolvers/tag.resolver';
import { UserResolver } from './resolvers/user.resolver';
import { UserDetailsResolver } from './resolvers/userDetails.resolver';



const routes: Routes = [

  //component general
  {path: '', component: HomeComponent},
  {path: 'error-404', component: WrongWayComponent},
  {path: 'legal', component:CguComponent},
  
  //component company
  {path: 'offer-company', component: OfferCompanyComponent, resolve: {
    companyList: CompanyResolver,
    companyUserList: CompanyUserResolver,
    contractTypeList: ContractTypeResolver,
    keyWordList: KeyWordResolver,
    offerList: OfferResolver,
    pingList: PingResolver,
    roleList: RoleResolver,
    // selectionList: SelectionResolver,
    // statusList: StatusResolver,
    // tagList: TagResolver,
    // userList: UserResolver
  }},
  {path: 'ping', component: PingComponent, resolve: {
    companyList: CompanyResolver,
    companyUserList: CompanyUserResolver,
    contractTypeList: ContractTypeResolver,
    keyWordList: KeyWordResolver,
    offerList: OfferResolver,
    pingList: PingResolver,
    roleList: RoleResolver,
    selectionList: SelectionResolver,
    statusList: StatusResolver,
    tagList: TagResolver,
    userList: UserResolver
  }},
  {path: 'price', component: PriceComponent, resolve: {
  }},
  {path: 'profil-company', component: ProfileCompanyComponent, resolve: {
    companyList: CompanyResolver,
    companyUserList: CompanyUserResolver,
    // contractTypeList: ContractTypeResolver,
    // keyWordList: KeyWordResolver,
    // offerList: OfferResolver,
    // pingList: PingResolver,
    roleList: RoleResolver,
    // selectionList: SelectionResolver,
    // statusList: StatusResolver,
    // tagList: TagResolver,
    // userList: UserResolver
  }},
  {path: 'search-company', component: SearchCompanyComponent, resolve: {
    companyList: CompanyResolver,
    companyUserList: CompanyUserResolver,
    contractTypeList: ContractTypeResolver,
    keyWordList: KeyWordResolver,
    offerList: OfferResolver,
    pingList: PingResolver,
    roleList: RoleResolver,
    selectionList: SelectionResolver,
    statusList: StatusResolver,
    tagList: TagResolver,
    userList: UserResolver
  }},
  {path: 'selection-company', component: SelectionCompanyComponent, resolve: {
    companyList: CompanyResolver,
    companyUserList: CompanyUserResolver,
    contractTypeList: ContractTypeResolver,
    keyWordList: KeyWordResolver,
    offerList: OfferResolver,
    pingList: PingResolver,
    roleList: RoleResolver,
    selectionList: SelectionResolver,
    statusList: StatusResolver,
    tagList: TagResolver,
    userList: UserResolver
  }},
  {path: 'sign-in-company', component: SignInComponent},
  {path: 'sign-up-company', component: SignUpComponent},
  
  //component user
  {path: 'dashboard-user', component: DashboardUserComponent, resolve: {
    companyList: CompanyResolver,
    contractTypeList: ContractTypeResolver,
    keyWordList: KeyWordResolver,
    offerList: OfferResolver,
    pingList: PingResolver,
    statusList: StatusResolver,
    userDetails: UserDetailsResolver
  }},
  {path: 'identification-user', component: IdentificationUserComponent},
  {path: 'offer-user/:id', component: OfferUserComponent, resolve: {
    companyList: CompanyResolver,
    contractTypeList: ContractTypeResolver,
    keyWordList: KeyWordResolver,
    offerList: OfferResolver,
    pingList: PingResolver,
    statusList: StatusResolver,
    userDetails: UserDetailsResolver,
  }},
  {path: 'profile-user', component: ProfileUserComponent, resolve: {
    // keyWordList: KeyWordResolver,    
    userDetails: UserDetailsResolver
  }},
  {path: 'search-user', component: SearchUserComponent, resolve: {
    // companyList: CompanyResolver,
    contractTypeList: ContractTypeResolver,
    // keyWordList: KeyWordResolver,
    offerList: OfferResolver,
    // statusList: StatusResolver,
    // tagList: TagResolver,
    userDetails: UserDetailsResolver
  }},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    CompanyResolver,
    CompanyUserResolver,
    ContractTypeResolver,
    KeyWordResolver,
    OfferResolver,
    PingResolver,
    RoleResolver,
    SelectionResolver,
    StatusResolver,
    TagResolver,
    UserResolver,
    UserDetailsResolver
  ]
})
export class AppRoutingModule { }
