var e,t,r,o,a,n,i,d,l,s,p,u,m,E,c,M,g,C;exports.EntityEventNotificationTriggerEnum=void 0,(e=exports.EntityEventNotificationTriggerEnum||(exports.EntityEventNotificationTriggerEnum={})).OnCreate="OnCreate",e.OnAssigned="OnAssigned",exports.StaticPermissionEnum=void 0,(t=exports.StaticPermissionEnum||(exports.StaticPermissionEnum={})).Create="Create",t.Read="Read",t.Update="Update",t.Delete="Delete",exports.EventTriggerEnum=void 0,(r=exports.EventTriggerEnum||(exports.EventTriggerEnum={})).OnCreate="OnCreate",r.OnUpdate="OnUpdate",r.OnClick="OnClick",exports.EventTypeEnum=void 0,(o=exports.EventTypeEnum||(exports.EventTypeEnum={})).ApiCall="ApiCall",o.Redirection="Redirection",o.MicroFrontendRedirection="MicroFrontendRedirection",exports.FieldTypeEnum=void 0,(a=exports.FieldTypeEnum||(exports.FieldTypeEnum={})).Number="Number",a.Text="Text",a.Paragraph="Paragraph",a.File="File",a.Selector="Selector",a.Button="Button",a.Table="Table",a.IFrame="IFrame",exports.ChatMessagesEnum=void 0,(n=exports.ChatMessagesEnum||(exports.ChatMessagesEnum={})).Receive="ChatReceive",n.Delete="ChatDelete",n.ReaceiveReaction="ReaceiveReaction",n.SendTypingState="SendTypingState",n.ReceiveTypingState="SendTypingState",n.ReceiveLastMarkedMessageAsReadByUser="ReceiveLastMarkedMessageAsReadByUser",exports.ModelFieldConditionTypeEnum=void 0,(i=exports.ModelFieldConditionTypeEnum||(exports.ModelFieldConditionTypeEnum={})).SuperiorTo="SuperiorTo",i.SuperiorOrEqualTo="SuperiorOrEqualTo",i.InferiorTo="InferiorTo",i.InferiorOrEqualTo="InferiorOrEqualTo",i.Equal="Equal",i.ValueInferiorOrEqualToCurrentYearPlusValueOfFieldAndSuperiorOrEqualToCurrentYear="ValueInferiorOrEqualToCurrentYearPlusValueOfFieldAndSuperiorOrEqualToCurrentYear",i.StateConditionsMet="StateConditionsMet",i.IfYearTableThenNumberOfYearsInTheFutureIsEqualToValueOfField="IfYearTableThenNumberOfYearsInTheFutureIsEqualToValueOfField",exports.ModelOrderAssociationLevelEnum=void 0,(d=exports.ModelOrderAssociationLevelEnum||(exports.ModelOrderAssociationLevelEnum={})).OrderLevel="OrderLevel",d.ProductLevel="ProductLevel",exports.ModelOrderAssociationPermissionEnum=void 0,(l=exports.ModelOrderAssociationPermissionEnum||(exports.ModelOrderAssociationPermissionEnum={})).ForSeller="ForSeller",l.ForBuyer="ForBuyer",l.ForBothSellerAndBuyer="ForBothSellerAndBuyer",exports.ModelStateTypeEnum=void 0,(s=exports.ModelStateTypeEnum||(exports.ModelStateTypeEnum={})).ParentState="ParentState",s.SubState="SubState",exports.NotificationMessageEnum=void 0,(exports.NotificationMessageEnum||(exports.NotificationMessageEnum={})).Receive="NotificationReceive",exports.PostVisibilityEnum=void 0,(p=exports.PostVisibilityEnum||(exports.PostVisibilityEnum={})).Private="Private",p.Public="Public",p.Connections="Connections",exports.PostDesignEnum=void 0,(u=exports.PostDesignEnum||(exports.PostDesignEnum={})).Default="Default",u.Spacing="Spacing",u.Card="Card",u.fullWidthPicture="FullWidthPicture",u.TitleAndText="TitleAndText",u.Banner="Banner",u.TitleImageAndText="TitleImageAndText",u.ChildrenContainer="ChildrenContainer",u.RotatingCarzd="RotatingCard",u.AnimatedTitle="AnimatedTitle",u.UnderlinedTitle="UnderinedTitle",u.Footer="Footer",u.ContactForm="ContactForm",u.Person="Person",u.Card2="Card2",u.Video="Video",u.ModelForm="ModelForm",u.ModelList="ModelList",exports.ReactionEnum=void 0,(m=exports.ReactionEnum||(exports.ReactionEnum={})).Love="Love",m.Laugh="Laugh",m.Shock="Shock",m.Cry="Cry",m.Angry="Angry",m.OK="OK",exports.PermissionEnum=void 0,(E=exports.PermissionEnum||(exports.PermissionEnum={})).EditConfiguration="EditConfiguration",E.CreatePage="CreatePage",E.ReadPage="ReadPage",E.UpdatePage="UpdatePage",E.DeletePage="DeletePage",E.CreatePost="CreatePost",E.CreateField="CreateField",E.ReadField="ReadField",E.UpdateField="UpdateField",E.DeleteField="DeleteField",E.ReadOwnField="ReadOwnField",E.UpdateOwnField="UpdateOwnField",E.DeleteOwnField="DeleteOwnField",E.CreateModel="CreateModel",E.ReadModel="ReadModel",E.UpdateModel="UpdateModel",E.DeleteModel="DeleteModel",E.ReadOwnModel="ReadOwnModel",E.UpdateOwnModel="UpdateOwnModel",E.DeleteOwnModel="DeleteOwnModel",E.CreateUser="CreateUser",E.ReadUser="ReadUser",E.UpdateUser="UpdateUser",E.DeleteUser="DeleteUser",E.CreateRole="CreateRole",E.ReadRole="ReadRole",E.UpdateRole="UpdateRole",E.DeleteRole="DeleteRole",E.CreateMicroFrontend="CreateMicroFrontend",E.ReadMicroFrontend="ReadMicroFrontend",E.UpdateMicroFrontend="UpdateMicroFrontend",E.DeleteMicroFrontend="DeleteMicroFrontend",E.CreatePaymentMethod="CreatePaymentMethod",E.ReadPaymentMethod="ReadPaymentMethod",E.UpdatePaymentMethod="UpdatePaymentMethod",E.DeletePaymentMethod="DeletePaymentMethod",E.CreateShippingMethod="CreateShippingMethod",E.ReadShippingMethod="ReadShippingMethod",E.UpdateShippingMethod="UpdateShippingMethod",E.DeleteShippingMethod="DeleteShippingMethod",E.CreateAddress="CreateAddress",E.ReadAddress="ReadAddress",E.UpdateAddress="UpdateAddress",E.DeleteAddress="DeleteAddress",exports.SuperRoleEnum=void 0,(c=exports.SuperRoleEnum||(exports.SuperRoleEnum={})).SuperAdmin="SuperAdmin",c.Normal="Normal",exports.OrderStatusEnum=void 0,(M=exports.OrderStatusEnum||(exports.OrderStatusEnum={})).Pending="Pending",M.Paid="Paid",M.Processing="Processing",M.InTransit="InTransit",M.OutForDelivery="OutForDelivery",M.Delivered="Delivered",M.Compeleted="Completed",exports.OrderNegativeStatusEnum=void 0,(g=exports.OrderNegativeStatusEnum||(exports.OrderNegativeStatusEnum={})).Cancelleted="Cancelled",g.OnHold="OnHold",g.Refunded="Refunded",exports.OrderPaymentMethodEnum=void 0,(C=exports.OrderPaymentMethodEnum||(exports.OrderPaymentMethodEnum={})).Card="card",C.BankTransfer="ach_credit_transfer",C.Ideal="ideal",C.Alipay="alipay",C.Bancontact="bancontact",C.Eps="eps",C.giropay="giropay",C.klarna="klarna",C.multibanco="multibanco",C.sepa_debit="sepa_debit",C.sofort="sofort",C.wechat_pay="wechat_pay",C.p24="p24",C.paypal="paypal",C.afterpay_clearpay="afterpay_clearpay";
//# sourceMappingURL=index.js.map
