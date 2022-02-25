import { Directive, Input, OnDestroy, TemplateRef, ViewContainerRef } from "@angular/core";
import * as load from "lodash"
import { Subscription } from "rxjs";
import { User } from "../model/user";
import { AuthService } from "../services/auth.service";

@Directive({
    selector:"[rbacAllow]"
})
export class RbacAllowDirective implements OnDestroy{

allowedRoles:string[]
user:User;
sub:Subscription

constructor(
    private templateRef:TemplateRef<any>,
    private authService:AuthService,
    private viewContainer:ViewContainerRef){
         this.sub = authService.user$.subscribe((user:User)=>{
                    this.user = user
            })
    }


@Input() set rbacAllow(allowedRoles:string[]){
    this.allowedRoles = allowedRoles;
    this.showIfUserAllowed();
}

showIfUserAllowed()
{
    if(!this.user|| !this.allowedRoles || this.allowedRoles.length === 0)
    {
        this.viewContainer.clear();
        return
    }

    const isUserAllowed = load.intersection(this.allowedRoles, this.user.roles).length > 0;

    if(isUserAllowed)
    {
        this.viewContainer.createEmbeddedView(this.templateRef);
    }
    else
    {
        this.viewContainer.clear();
    }

}

ngOnDestroy(): void {
    this.sub.unsubscribe();
}

}