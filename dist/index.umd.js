!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e||self).roottypes={})}(this,function(e){var t,n,a,i,d,r,o,l,s,u,p,m,E,c,M,g,y;e.EntityEventNotificationTriggerEnum=void 0,(t=e.EntityEventNotificationTriggerEnum||(e.EntityEventNotificationTriggerEnum={})).OnCreate="OnCreate",t.OnUpdate="OnUpdate",t.OnAssigned="OnAssigned",t.OnUpdateWhenAssigned="OnUpdateWhenAssigned",e.EntityStaticPermissionEnum=void 0,(n=e.EntityStaticPermissionEnum||(e.EntityStaticPermissionEnum={})).Create="Create",n.Read="Read",n.Update="Update",n.Delete="Delete",n.ReadOwn="ReadOwn",n.UpdateOwn="UpdateOwn",n.DeleteOwn="DeleteOwn",e.EventTriggerEnum=void 0,(a=e.EventTriggerEnum||(e.EventTriggerEnum={})).OnCreate="OnCreate",a.OnUpdate="OnUpdate",a.OnClick="OnClick",e.EventTypeEnum=void 0,(i=e.EventTypeEnum||(e.EventTypeEnum={})).ApiCall="ApiCall",i.Redirection="Redirection",i.MicroFrontendRedirection="MicroFrontendRedirection",e.FieldTypeEnum=void 0,(d=e.FieldTypeEnum||(e.FieldTypeEnum={})).Number="Number",d.Text="Text",d.Paragraph="Paragraph",d.File="File",d.Selector="Selector",d.Button="Button",d.Table="Table",d.IFrame="IFrame",e.ChatMessagesEnum=void 0,(r=e.ChatMessagesEnum||(e.ChatMessagesEnum={})).Receive="ChatReceive",r.Delete="ChatDelete",r.ReaceiveReaction="ReaceiveReaction",r.SendTypingState="SendTypingState",r.ReceiveTypingState="SendTypingState",r.ReceiveLastMarkedMessageAsReadByUser="ReceiveLastMarkedMessageAsReadByUser",e.ModelFieldConditionTypeEnum=void 0,(o=e.ModelFieldConditionTypeEnum||(e.ModelFieldConditionTypeEnum={})).SuperiorTo="SuperiorTo",o.SuperiorOrEqualTo="SuperiorOrEqualTo",o.InferiorTo="InferiorTo",o.InferiorOrEqualTo="InferiorOrEqualTo",o.Equal="Equal",o.ValueInferiorOrEqualToCurrentYearPlusValueOfFieldAndSuperiorOrEqualToCurrentYear="ValueInferiorOrEqualToCurrentYearPlusValueOfFieldAndSuperiorOrEqualToCurrentYear",o.StateConditionsMet="StateConditionsMet",o.IfYearTableThenNumberOfYearsInTheFutureIsEqualToValueOfField="IfYearTableThenNumberOfYearsInTheFutureIsEqualToValueOfField",e.ModelOrderAssociationLevelEnum=void 0,(l=e.ModelOrderAssociationLevelEnum||(e.ModelOrderAssociationLevelEnum={})).OrderLevel="OrderLevel",l.ProductLevel="ProductLevel",e.ModelOrderAssociationPermissionEnum=void 0,(s=e.ModelOrderAssociationPermissionEnum||(e.ModelOrderAssociationPermissionEnum={})).ForSeller="ForSeller",s.ForBuyer="ForBuyer",s.ForBothSellerAndBuyer="ForBothSellerAndBuyer",e.ModelStateTypeEnum=void 0,(u=e.ModelStateTypeEnum||(e.ModelStateTypeEnum={})).ParentState="ParentState",u.SubState="SubState",e.NotificationMessageEnum=void 0,(e.NotificationMessageEnum||(e.NotificationMessageEnum={})).Receive="NotificationReceive",e.PostVisibilityEnum=void 0,(p=e.PostVisibilityEnum||(e.PostVisibilityEnum={})).Private="Private",p.Public="Public",p.Connections="Connections",e.PostDesignEnum=void 0,(m=e.PostDesignEnum||(e.PostDesignEnum={})).Default="Default",m.Spacing="Spacing",m.Card="Card",m.fullWidthPicture="FullWidthPicture",m.TitleAndText="TitleAndText",m.Banner="Banner",m.TitleImageAndText="TitleImageAndText",m.ChildrenContainer="ChildrenContainer",m.RotatingCarzd="RotatingCard",m.AnimatedTitle="AnimatedTitle",m.UnderlinedTitle="UnderinedTitle",m.Footer="Footer",m.ContactForm="ContactForm",m.Person="Person",m.Card2="Card2",m.Video="Video",m.ModelForm="ModelForm",m.ModelList="ModelList",e.ReactionEnum=void 0,(E=e.ReactionEnum||(e.ReactionEnum={})).Love="Love",E.Laugh="Laugh",E.Shock="Shock",E.Cry="Cry",E.Angry="Angry",E.OK="OK",e.PermissionEnum=void 0,(c=e.PermissionEnum||(e.PermissionEnum={})).EditConfiguration="EditConfiguration",c.CreatePage="CreatePage",c.ReadPage="ReadPage",c.UpdatePage="UpdatePage",c.DeletePage="DeletePage",c.CreatePost="CreatePost",c.CreateField="CreateField",c.ReadField="ReadField",c.UpdateField="UpdateField",c.DeleteField="DeleteField",c.ReadOwnField="ReadOwnField",c.UpdateOwnField="UpdateOwnField",c.DeleteOwnField="DeleteOwnField",c.CreateModel="CreateModel",c.ReadModel="ReadModel",c.UpdateModel="UpdateModel",c.DeleteModel="DeleteModel",c.ReadOwnModel="ReadOwnModel",c.UpdateOwnModel="UpdateOwnModel",c.DeleteOwnModel="DeleteOwnModel",c.CreateUser="CreateUser",c.ReadUser="ReadUser",c.UpdateUser="UpdateUser",c.DeleteUser="DeleteUser",c.CreateRole="CreateRole",c.ReadRole="ReadRole",c.UpdateRole="UpdateRole",c.DeleteRole="DeleteRole",c.CreateMicroFrontend="CreateMicroFrontend",c.ReadMicroFrontend="ReadMicroFrontend",c.UpdateMicroFrontend="UpdateMicroFrontend",c.DeleteMicroFrontend="DeleteMicroFrontend",c.CreatePaymentMethod="CreatePaymentMethod",c.ReadPaymentMethod="ReadPaymentMethod",c.UpdatePaymentMethod="UpdatePaymentMethod",c.DeletePaymentMethod="DeletePaymentMethod",c.CreateShippingMethod="CreateShippingMethod",c.ReadShippingMethod="ReadShippingMethod",c.UpdateShippingMethod="UpdateShippingMethod",c.DeleteShippingMethod="DeleteShippingMethod",c.CreateAddress="CreateAddress",c.ReadAddress="ReadAddress",c.UpdateAddress="UpdateAddress",c.DeleteAddress="DeleteAddress",e.SuperRoleEnum=void 0,(M=e.SuperRoleEnum||(e.SuperRoleEnum={})).SuperAdmin="SuperAdmin",M.Normal="Normal",e.OrderPaymentStatusEnum=void 0,(g=e.OrderPaymentStatusEnum||(e.OrderPaymentStatusEnum={})).Pending="Pending",g.Paid="Paid",e.OrderPaymentMethodEnum=void 0,(y=e.OrderPaymentMethodEnum||(e.OrderPaymentMethodEnum={})).Card="card",y.BankTransfer="ach_credit_transfer",y.Ideal="ideal",y.Alipay="alipay",y.Bancontact="bancontact",y.Eps="eps",y.giropay="giropay",y.klarna="klarna",y.multibanco="multibanco",y.sepa_debit="sepa_debit",y.sofort="sofort",y.wechat_pay="wechat_pay",y.p24="p24",y.paypal="paypal",y.afterpay_clearpay="afterpay_clearpay"});
//# sourceMappingURL=index.umd.js.map
