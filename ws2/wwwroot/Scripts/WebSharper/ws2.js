(function()
{
 "use strict";
 var Global,ws2,Clarity,ClarityButtonType,ClaritySelectVar,ClarityInputVar,ClarityCheckboxItem,ClarityCheckboxVar,ClarityButtonSpec,ButtonSize,ClarityDatePickerVar,ColumnDef,ClarityColumnWidth,DatePickerType,DatePickerViewManager,ClarityImage,ClarityCardBlock,CardMediaBlock,ClarityBasicCardVar,ClarityAction,ClarityImageCardVar,SC$1,Client,SC$2,ws2_Templates,WebSharper,UI,Doc,AttrProxy,AttrModule,Unchecked,Var$1,List,Seq,Operators,DateUtil,Date,Math,View,MatchFailureException,Utils,Strings,IntelliFactory,Runtime,Submitter,Remoting,AjaxRemotingProvider,Concurrency,Templating,Runtime$1,Server,ProviderBuilder,Handler,TemplateInstance,console,Enumerator,ListModel,Client$1,Templates,DomUtility;
 Global=self;
 ws2=Global.ws2=Global.ws2||{};
 Clarity=ws2.Clarity=ws2.Clarity||{};
 ClarityButtonType=Clarity.ClarityButtonType=Clarity.ClarityButtonType||{};
 ClaritySelectVar=Clarity.ClaritySelectVar=Clarity.ClaritySelectVar||{};
 ClarityInputVar=Clarity.ClarityInputVar=Clarity.ClarityInputVar||{};
 ClarityCheckboxItem=Clarity.ClarityCheckboxItem=Clarity.ClarityCheckboxItem||{};
 ClarityCheckboxVar=Clarity.ClarityCheckboxVar=Clarity.ClarityCheckboxVar||{};
 ClarityButtonSpec=Clarity.ClarityButtonSpec=Clarity.ClarityButtonSpec||{};
 ButtonSize=Clarity.ButtonSize=Clarity.ButtonSize||{};
 ClarityDatePickerVar=Clarity.ClarityDatePickerVar=Clarity.ClarityDatePickerVar||{};
 ColumnDef=Clarity.ColumnDef=Clarity.ColumnDef||{};
 ClarityColumnWidth=Clarity.ClarityColumnWidth=Clarity.ClarityColumnWidth||{};
 DatePickerType=Clarity.DatePickerType=Clarity.DatePickerType||{};
 DatePickerViewManager=Clarity.DatePickerViewManager=Clarity.DatePickerViewManager||{};
 ClarityImage=Clarity.ClarityImage=Clarity.ClarityImage||{};
 ClarityCardBlock=Clarity.ClarityCardBlock=Clarity.ClarityCardBlock||{};
 CardMediaBlock=Clarity.CardMediaBlock=Clarity.CardMediaBlock||{};
 ClarityBasicCardVar=Clarity.ClarityBasicCardVar=Clarity.ClarityBasicCardVar||{};
 ClarityAction=Clarity.ClarityAction=Clarity.ClarityAction||{};
 ClarityImageCardVar=Clarity.ClarityImageCardVar=Clarity.ClarityImageCardVar||{};
 SC$1=Global.StartupCode$ws2$Clarity=Global.StartupCode$ws2$Clarity||{};
 Client=ws2.Client=ws2.Client||{};
 SC$2=Global.StartupCode$ws2$Client=Global.StartupCode$ws2$Client||{};
 ws2_Templates=Global.ws2_Templates=Global.ws2_Templates||{};
 WebSharper=Global.WebSharper;
 UI=WebSharper&&WebSharper.UI;
 Doc=UI&&UI.Doc;
 AttrProxy=UI&&UI.AttrProxy;
 AttrModule=UI&&UI.AttrModule;
 Unchecked=WebSharper&&WebSharper.Unchecked;
 Var$1=UI&&UI.Var$1;
 List=WebSharper&&WebSharper.List;
 Seq=WebSharper&&WebSharper.Seq;
 Operators=WebSharper&&WebSharper.Operators;
 DateUtil=WebSharper&&WebSharper.DateUtil;
 Date=Global.Date;
 Math=Global.Math;
 View=UI&&UI.View;
 MatchFailureException=WebSharper&&WebSharper.MatchFailureException;
 Utils=WebSharper&&WebSharper.Utils;
 Strings=WebSharper&&WebSharper.Strings;
 IntelliFactory=Global.IntelliFactory;
 Runtime=IntelliFactory&&IntelliFactory.Runtime;
 Submitter=UI&&UI.Submitter;
 Remoting=WebSharper&&WebSharper.Remoting;
 AjaxRemotingProvider=Remoting&&Remoting.AjaxRemotingProvider;
 Concurrency=WebSharper&&WebSharper.Concurrency;
 Templating=UI&&UI.Templating;
 Runtime$1=Templating&&Templating.Runtime;
 Server=Runtime$1&&Runtime$1.Server;
 ProviderBuilder=Server&&Server.ProviderBuilder;
 Handler=Server&&Server.Handler;
 TemplateInstance=Server&&Server.TemplateInstance;
 console=Global.console;
 Enumerator=WebSharper&&WebSharper.Enumerator;
 ListModel=UI&&UI.ListModel;
 Client$1=UI&&UI.Client;
 Templates=Client$1&&Client$1.Templates;
 DomUtility=UI&&UI.DomUtility;
 ClarityButtonType.Tertiary={
  $:11
 };
 ClarityButtonType.Secondary={
  $:10
 };
 ClarityButtonType.Flat={
  $:9
 };
 ClarityButtonType.DangerOutline={
  $:8
 };
 ClarityButtonType.WarningOutline={
  $:7
 };
 ClarityButtonType.Info={
  $:6
 };
 ClarityButtonType.SuccessOutline={
  $:5
 };
 ClarityButtonType.Regular={
  $:4
 };
 ClarityButtonType.Danger={
  $:3
 };
 ClarityButtonType.Warning={
  $:2
 };
 ClarityButtonType.Success={
  $:1
 };
 ClarityButtonType.Primary={
  $:0
 };
 ClaritySelectVar.New=function(Selection,ErrorState,Values,SubText,Id,Label)
 {
  return{
   Selection:Selection,
   ErrorState:ErrorState,
   Values:Values,
   SubText:SubText,
   Id:Id,
   Label:Label
  };
 };
 ClarityInputVar.New=function(Value,Label,ErrorState,SubText,Placeholder,Id)
 {
  return{
   Value:Value,
   Label:Label,
   ErrorState:ErrorState,
   SubText:SubText,
   Placeholder:Placeholder,
   Id:Id
  };
 };
 ClarityCheckboxItem.New=function(Option,Checked)
 {
  return{
   Option:Option,
   Checked:Checked
  };
 };
 ClarityCheckboxVar.New=function(Id,ErrorState,SubText,Options,Label)
 {
  return{
   Id:Id,
   ErrorState:ErrorState,
   SubText:SubText,
   Options:Options,
   Label:Label
  };
 };
 ClarityButtonSpec.New=function(Type,Disabled,Size,Text)
 {
  return{
   Type:Type,
   Disabled:Disabled,
   Size:Size,
   Text:Text
  };
 };
 ButtonSize.Normal={
  $:1
 };
 ButtonSize.Small={
  $:0
 };
 ClarityDatePickerVar.New=function(TheDate,Month,Year,Day)
 {
  return{
   TheDate:TheDate,
   Month:Month,
   Year:Year,
   Day:Day
  };
 };
 ColumnDef.New=function(Quantity,ColumnWidth)
 {
  return{
   Quantity:Quantity,
   ColumnWidth:ColumnWidth
  };
 };
 ClarityColumnWidth.ExtraLarge={
  $:4
 };
 ClarityColumnWidth.Large={
  $:3
 };
 ClarityColumnWidth.Medium={
  $:2
 };
 ClarityColumnWidth.Small={
  $:1
 };
 ClarityColumnWidth.ExtraSmall={
  $:0
 };
 DatePickerType.YearPicker={
  $:3
 };
 DatePickerType.MonthPicker={
  $:2
 };
 DatePickerType.DayPicker={
  $:1
 };
 DatePickerType.Invisible={
  $:0
 };
 DatePickerViewManager.New=function(CurrentView)
 {
  return{
   CurrentView:CurrentView
  };
 };
 ClarityImage.New=function(Source,Alt)
 {
  return{
   Source:Source,
   Alt:Alt
  };
 };
 ClarityCardBlock.New=function(Title,Text,MediaBlock)
 {
  return{
   Title:Title,
   Text:Text,
   MediaBlock:MediaBlock
  };
 };
 CardMediaBlock.New=function(Image,Title,Text)
 {
  return{
   Image:Image,
   Title:Title,
   Text:Text
  };
 };
 ClarityBasicCardVar.New=function(Heading,Blocks,Actions,MainAction)
 {
  return{
   Heading:Heading,
   Blocks:Blocks,
   Actions:Actions,
   MainAction:MainAction
  };
 };
 ClarityAction.New=function(Text,Action)
 {
  return{
   Text:Text,
   Action:Action
  };
 };
 ClarityImageCardVar.New=function(MainAction,MainImage)
 {
  return{
   MainAction:MainAction,
   MainImage:MainImage
  };
 };
 Clarity.ClarityCard=function(cc)
 {
  return cc.$==1?Clarity.ClarityImageCard(cc.$0):Clarity.ClarityBasicCard(cc.$0);
 };
 Clarity.ClarityImageCard=function(cic)
 {
  var m,v;
  m=cic.MainAction;
  return m==null?Doc.Element("div",[AttrProxy.Create("class","card card-img")],[Doc.Element("img",[AttrProxy.Create("src",cic.MainImage.$0.Source),AttrProxy.Create("alt",cic.MainImage.$0.Alt)],[])]):(v=m.$0,Doc.Element("div",[AttrProxy.Create("class","card clickable card-img"),AttrModule.Handler("click",function()
  {
   return function()
   {
    return v();
   };
  })],[Doc.Element("img",[AttrProxy.Create("src",cic.MainImage.$0.Source),AttrProxy.Create("alt",cic.MainImage.$0.Alt)],[])]));
 };
 Clarity.ClarityBasicCard=function(cbc)
 {
  var mo,blocks,acts,drops,links,x;
  function listen(evt)
  {
   var myel,myel2,target;
   myel=self.document.getElementById("carddrop");
   myel2=self.document.getElementById("carddropmenu");
   target=evt.target;
   myel.classList.contains("open")?function($1,$2)
   {
    var n,m;
    while(true)
     if(Unchecked.Equals($2,null))
      {
       mo.Set(false);
       self.document.removeEventListener("click",listen);
       return null;
      }
     else
      if($2.isEqualNode($1))
       return null;
      else
       {
        n=$2;
        m=$1;
        $1=m;
        $2=n.parentNode;
       }
   }(myel2,target):void 0;
  }
  function renderImage(b)
  {
   return Doc.Element("div",[AttrProxy.Create("class","card-img")],[Doc.Element("img",[AttrProxy.Create("src",b.Source),AttrProxy.Create("alt",b.Alt)],[])]);
  }
  function renderCardBlockWithMedia(cb)
  {
   return Doc.Element("div",[AttrProxy.Create("class","card-block")],[Doc.Element("div",[AttrProxy.Create("class","card-media-block")],[Doc.Element("img",[AttrProxy.Create("class","card-media-image"),AttrProxy.Create("src",cb.MediaBlock.$0.Image.Source),AttrProxy.Create("alt",cb.MediaBlock.$0.Image.Alt)],[]),Doc.Element("div",[AttrProxy.Create("class","card-media-description")],[Doc.Element("span",[AttrProxy.Create("class","card-media-title")],[Doc.TextNode(cb.MediaBlock.$0.Title)]),Doc.Element("span",[AttrProxy.Create("class","card-media-text")],[Doc.TextNode(cb.MediaBlock.$0.Text)])])]),Doc.Element("div",[AttrProxy.Create("class","card-text")],[Doc.TextNode(cb.Text)])]);
  }
  function renderCardBlock(b)
  {
   return b.MediaBlock==null?Doc.Element("div",[AttrProxy.Create("class","card-block")],[Doc.Element("div",[AttrProxy.Create("class","card-title")],[Doc.TextNode(b.Title)]),Doc.Element("div",[AttrProxy.Create("class","card-text")],[Doc.TextNode(b.Text)])]):renderCardBlockWithMedia(b);
  }
  function act(a)
  {
   return Clarity.ClarityButton(Var$1.Create$1(ClarityButtonSpec.New(ClarityButtonType.Flat,false,ButtonSize.Small,a.Text)),a.Action);
  }
  mo=Var$1.Create$1(false);
  blocks=Doc.Concat(List.map(function(b)
  {
   return b.$==1?renderImage(b.$0):renderCardBlock(b.$0);
  },cbc.Blocks));
  acts=cbc.Actions.get_Length()<=2?Doc.Concat(List.map(act,cbc.Actions)):Doc.Concat(Seq.map(act,Seq.take(2,cbc.Actions)));
  drops=(links=Doc.Concat(Seq.map(function(aa)
  {
   return Doc.Element("a",[AttrProxy.Create("class","dropdown-item"),AttrModule.Handler("click",function()
   {
    return function()
    {
     mo.Set(false);
     return aa.Action();
    };
   })],[Doc.TextNode(aa.Text)]);
  },Seq.rev((x=Seq.rev(cbc.Actions),Seq.take(cbc.Actions.get_Length()-2,x))))),Doc.Element("div",[AttrProxy.Create("class","dropdown top-left"),AttrModule.DynamicClassPred("open",mo.get_View()),AttrProxy.Create("id","carddrop")],[Doc.Element("button",[AttrProxy.Create("class","dropdown-toggle btn btn-sm btn-link"),AttrModule.Handler("click",function()
  {
   return function()
   {
    mo.Set(true);
    return self.document.addEventListener("click",listen);
   };
  })],[Doc.TextNode("Dropdown 1"),Doc.Element("clr-icon",List.ofArray([AttrProxy.Create("shape","caret down")]),List.T.Empty)]),Doc.Element("div",[AttrProxy.Create("class","dropdown-menu"),AttrProxy.Create("id","carddropmenu")],[links])]));
  return(function()
  {
   var m,a,v,a$1;
   m=cbc.MainAction;
   return m==null?(a=List.ofArray([AttrProxy.Create("class","card")]),function(c)
   {
    return Doc.Element("div",a,c);
   }):(v=m.$0,(a$1=List.ofArray([AttrProxy.Create("class","card clickable"),AttrModule.Handler("click",function()
   {
    return function()
    {
     return v();
    };
   })]),function(c)
   {
    return Doc.Element("div",a$1,c);
   }));
  }(null))(List.ofArray([Doc.Element("div",[AttrProxy.Create("class","card-header")],[Doc.TextNode(cbc.Heading)]),blocks,Doc.Element("div",[AttrProxy.Create("class","card-footer")],[acts,cbc.Actions.get_Length()>2?drops:Doc.Verbatim("")])]));
 };
 Clarity.ClarityDatePicker=function(cdp)
 {
  var dd,m,y,cal,ccv,ciw;
  function listen(evt)
  {
   var myel,target;
   myel=self.document.getElementById("datepicker");
   target=evt.target;
   !Unchecked.Equals(myel,null)?function($1,$2)
   {
    var n,m$1;
    while(true)
     if(Unchecked.Equals($2,null))
      {
       ccv.Set(DatePickerType.Invisible);
       return null;
      }
     else
      if(Global.String($2)===Global.String($1))
       return null;
      else
       {
        n=$2;
        m$1=$1;
        $1=m$1;
        $2=n.parentNode;
       }
   }(myel,target):void 0;
  }
  function activateMonthPicker(a,b)
  {
   return ccv.Set(DatePickerType.MonthPicker);
  }
  function activateYearPicker(a,b)
  {
   return ccv.Set(DatePickerType.YearPicker);
  }
  function clickHandler(a,b)
  {
   Unchecked.Equals(self.document.getElementById("datepicker"),null)?(ccv.Set(DatePickerType.DayPicker),self.document.addEventListener("click",listen)):(ccv.Set(DatePickerType.Invisible),self.document.removeEventListener("click",listen));
   return null;
  }
  function dayClickHandler(a,b)
  {
   dd.Set(Operators.toInt(Global.Number(a.firstChild.textContent)));
   ccv.Set(DatePickerType.Invisible);
   return null;
  }
  function previousMonthHandler(a,b)
  {
   var cd,c;
   cd=(c=(new Global.Date(y.Get(),m.Get()-1,dd.Get())).getTime(),DateUtil.AddMonths(c,-1));
   m.Set((new Global.Date(cd)).getMonth()+1);
   y.Set((new Global.Date(cd)).getFullYear());
   dd.Set((new Global.Date(cd)).getDate());
   return null;
  }
  function nextMonthHandler(a,b)
  {
   var cd,c;
   cd=(c=(new Global.Date(y.Get(),m.Get()-1,dd.Get())).getTime(),DateUtil.AddMonths(c,1));
   m.Set((new Global.Date(cd)).getMonth()+1);
   y.Set((new Global.Date(cd)).getFullYear());
   dd.Set((new Global.Date(cd)).getDate());
   return null;
  }
  function currentMonthHandler(a,b)
  {
   var cd,c;
   cd=(c=Date.now(),DateUtil.DatePortion(c));
   m.Set((new Date(cd)).getMonth()+1);
   y.Set((new Date(cd)).getFullYear());
   dd.Set((new Date(cd)).getDate());
   return null;
  }
  function calendarStartDate(year,month)
  {
   var da,m$1;
   da=(new Date(year,month-1,1)).getTime();
   while(true)
    {
     m$1=(new Date(da)).getDay();
     if(m$1===0)
      return da;
     else
      da=da+-1*86400000;
    }
  }
  function lastSaturday(year,month)
  {
   var lastDay,c,m$1;
   lastDay=(c=(new Date(year,month+1-1,1)).getTime(),c+-1*86400000);
   while(true)
    {
     m$1=(new Date(lastDay)).getDay();
     if(m$1===6)
      return lastDay;
     else
      lastDay=lastDay+1*86400000;
    }
  }
  function createDateRange4(date1,date2)
  {
   var start,c;
   function g(a)
   {
    return start+a*86400000;
   }
   start=Unchecked.Compare(date1,date2)===-1?date1:date2;
   return Seq.init(1+Operators.toInt(Math.abs((c=date2-date1,c/86400000))),function(x)
   {
    return g(Global.id(x));
   });
  }
  function monthPicker()
  {
   return List.ofArray([Doc.Element("clr-datepicker-view-manager",List.ofArray([AttrProxy.Create("class","datepicker"),AttrProxy.Create("tabindex","0"),AttrProxy.Create("id","datepicker")]),List.ofArray([Doc.Element("clr-monthpicker",List.ofArray([AttrModule.Class("monthpicker")]),List.ofArray([Doc.Element("button",[AttrProxy.Create("class","calendar-btn month"),AttrProxy.Create("type","button"),AttrProxy.Create("tabindex","-1"),AttrModule.Handler("click",function()
   {
    return function()
    {
     m.Set(1);
     return ccv.Set(DatePickerType.DayPicker);
    };
   })],[Doc.TextNode("January")]),Doc.Element("button",[AttrProxy.Create("class","calendar-btn month"),AttrProxy.Create("type","button"),AttrProxy.Create("tabindex","-1"),AttrModule.Handler("click",function()
   {
    return function()
    {
     m.Set(2);
     return ccv.Set(DatePickerType.DayPicker);
    };
   })],[Doc.TextNode("February")]),Doc.Element("button",[AttrProxy.Create("class","calendar-btn month"),AttrProxy.Create("type","button"),AttrProxy.Create("tabindex","-1"),AttrModule.Handler("click",function()
   {
    return function()
    {
     m.Set(3);
     return ccv.Set(DatePickerType.DayPicker);
    };
   })],[Doc.TextNode("March")]),Doc.Element("button",[AttrProxy.Create("class","calendar-btn month"),AttrProxy.Create("type","button"),AttrProxy.Create("tabindex","-1"),AttrModule.Handler("click",function()
   {
    return function()
    {
     m.Set(4);
     return ccv.Set(DatePickerType.DayPicker);
    };
   })],[Doc.TextNode("April")]),Doc.Element("button",[AttrProxy.Create("class","calendar-btn month"),AttrProxy.Create("type","button"),AttrProxy.Create("tabindex","-1"),AttrModule.Handler("click",function()
   {
    return function()
    {
     m.Set(5);
     return ccv.Set(DatePickerType.DayPicker);
    };
   })],[Doc.TextNode("May")]),Doc.Element("button",[AttrProxy.Create("class","calendar-btn month"),AttrProxy.Create("type","button"),AttrProxy.Create("tabindex","-1"),AttrModule.Handler("click",function()
   {
    return function()
    {
     m.Set(6);
     return ccv.Set(DatePickerType.DayPicker);
    };
   })],[Doc.TextNode("June")]),Doc.Element("button",[AttrProxy.Create("class","calendar-btn month"),AttrProxy.Create("type","button"),AttrProxy.Create("tabindex","-1"),AttrModule.Handler("click",function()
   {
    return function()
    {
     m.Set(7);
     return ccv.Set(DatePickerType.DayPicker);
    };
   })],[Doc.TextNode("July")]),Doc.Element("button",[AttrProxy.Create("class","calendar-btn month"),AttrProxy.Create("type","button"),AttrProxy.Create("tabindex","-1"),AttrModule.Handler("click",function()
   {
    return function()
    {
     m.Set(8);
     return ccv.Set(DatePickerType.DayPicker);
    };
   })],[Doc.TextNode("August")]),Doc.Element("button",[AttrProxy.Create("class","calendar-btn month"),AttrProxy.Create("type","button"),AttrProxy.Create("tabindex","-1"),AttrModule.Handler("click",function()
   {
    return function()
    {
     m.Set(9);
     return ccv.Set(DatePickerType.DayPicker);
    };
   })],[Doc.TextNode("September")]),Doc.Element("button",[AttrProxy.Create("class","calendar-btn month"),AttrProxy.Create("type","button"),AttrProxy.Create("tabindex","-1"),AttrModule.Handler("click",function()
   {
    return function()
    {
     m.Set(10);
     return ccv.Set(DatePickerType.DayPicker);
    };
   })],[Doc.TextNode("October")]),Doc.Element("button",[AttrProxy.Create("class","calendar-btn month"),AttrProxy.Create("type","button"),AttrProxy.Create("tabindex","-1"),AttrModule.Handler("click",function()
   {
    return function()
    {
     m.Set(11);
     return ccv.Set(DatePickerType.DayPicker);
    };
   })],[Doc.TextNode("November")]),Doc.Element("button",[AttrProxy.Create("class","calendar-btn month"),AttrProxy.Create("type","button"),AttrProxy.Create("tabindex","-1"),AttrModule.Handler("click",function()
   {
    return function()
    {
     m.Set(12);
     return ccv.Set(DatePickerType.DayPicker);
    };
   })],[Doc.TextNode("December")])]))]))]);
  }
  function yearPicker()
  {
   var yc,ycv;
   yc=Var$1.Create$1(y.Get());
   ycv=yc.get_View();
   return List.ofArray([Doc.Element("clr-datepicker-view-manager",List.ofArray([AttrProxy.Create("class","datepicker"),AttrProxy.Create("tabindex","0"),AttrProxy.Create("id","datepicker")]),List.ofArray([Doc.Element("clr-yearpicker",List.ofArray([AttrProxy.Create("class","yearpicker")]),List.ofArray([Doc.Element("div",[AttrProxy.Create("class","year-switchers")],[Doc.Element("button",[AttrProxy.Create("class","calendar-btn switcher"),AttrProxy.Create("type","button")],[Doc.Element("clr-icon",List.ofArray([AttrProxy.Create("dir","left"),AttrProxy.Create("shape","angle"),AttrProxy.Create("title","Previous"),AttrModule.Handler("click",function()
   {
    return function()
    {
     return yc.Set(yc.Get()-10);
    };
   })]),List.T.Empty)]),Doc.Element("button",[AttrProxy.Create("class","calendar-btn switcher"),AttrProxy.Create("type","button")],[Doc.Element("clr-icon",List.ofArray([AttrProxy.Create("shape","event"),AttrProxy.Create("title","Jump to current"),AttrModule.Handler("click",function()
   {
    return function()
    {
     return yc.Set(y.Get());
    };
   })]),List.T.Empty)]),Doc.Element("button",[AttrProxy.Create("class","calendar-btn switcher"),AttrProxy.Create("type","button")],[Doc.Element("clr-icon",List.ofArray([AttrProxy.Create("dir","right"),AttrProxy.Create("shape","angle"),AttrProxy.Create("title","Next"),AttrModule.Handler("click",function()
   {
    return function()
    {
     return yc.Set(yc.Get()+10);
    };
   })]),List.T.Empty)])]),Doc.Element("div",[AttrProxy.Create("class","years")],[Doc.Element("button",[AttrProxy.Create("class","calendar-btn year"),AttrProxy.Create("type","button"),AttrProxy.Create("tabindex","-1"),AttrModule.Handler("click",function()
   {
    return function()
    {
     y.Set(yc.Get()-9);
     return ccv.Set(DatePickerType.DayPicker);
    };
   })],[Doc.TextView(View.Map(function(a)
   {
    return Global.String(a-9);
   },ycv))]),Doc.Element("button",[AttrProxy.Create("class","calendar-btn year"),AttrProxy.Create("type","button"),AttrProxy.Create("tabindex","-1"),AttrModule.Handler("click",function()
   {
    return function()
    {
     y.Set(yc.Get()-8);
     return ccv.Set(DatePickerType.DayPicker);
    };
   })],[Doc.TextView(View.Map(function(a)
   {
    return Global.String(a-8);
   },ycv))]),Doc.Element("button",[AttrProxy.Create("class","calendar-btn year"),AttrProxy.Create("type","button"),AttrProxy.Create("tabindex","-1"),AttrModule.Handler("click",function()
   {
    return function()
    {
     y.Set(yc.Get()-7);
     return ccv.Set(DatePickerType.DayPicker);
    };
   })],[Doc.TextView(View.Map(function(a)
   {
    return Global.String(a-7);
   },ycv))]),Doc.Element("button",[AttrProxy.Create("class","calendar-btn year"),AttrProxy.Create("type","button"),AttrProxy.Create("tabindex","-1"),AttrModule.Handler("click",function()
   {
    return function()
    {
     y.Set(yc.Get()-6);
     return ccv.Set(DatePickerType.DayPicker);
    };
   })],[Doc.TextView(View.Map(function(a)
   {
    return Global.String(a-6);
   },ycv))]),Doc.Element("button",[AttrProxy.Create("class","calendar-btn year"),AttrProxy.Create("type","button"),AttrProxy.Create("tabindex","-1"),AttrModule.Handler("click",function()
   {
    return function()
    {
     y.Set(yc.Get()-5);
     return ccv.Set(DatePickerType.DayPicker);
    };
   })],[Doc.TextView(View.Map(function(a)
   {
    return Global.String(a-5);
   },ycv))]),Doc.Element("button",[AttrProxy.Create("class","calendar-btn year"),AttrProxy.Create("type","button"),AttrProxy.Create("tabindex","-1"),AttrModule.Handler("click",function()
   {
    return function()
    {
     y.Set(yc.Get()-4);
     return ccv.Set(DatePickerType.DayPicker);
    };
   })],[Doc.TextView(View.Map(function(a)
   {
    return Global.String(a-4);
   },ycv))]),Doc.Element("button",[AttrProxy.Create("class","calendar-btn year"),AttrProxy.Create("type","button"),AttrProxy.Create("tabindex","-1"),AttrModule.Handler("click",function()
   {
    return function()
    {
     y.Set(yc.Get()-3);
     return ccv.Set(DatePickerType.DayPicker);
    };
   })],[Doc.TextView(View.Map(function(a)
   {
    return Global.String(a-3);
   },ycv))]),Doc.Element("button",[AttrProxy.Create("class","calendar-btn year"),AttrProxy.Create("type","button"),AttrProxy.Create("tabindex","-1"),AttrModule.Handler("click",function()
   {
    return function()
    {
     y.Set(yc.Get()-2);
     return ccv.Set(DatePickerType.DayPicker);
    };
   })],[Doc.TextView(View.Map(function(a)
   {
    return Global.String(a-2);
   },ycv))]),Doc.Element("button",[AttrProxy.Create("class","calendar-btn year"),AttrProxy.Create("type","button"),AttrProxy.Create("tabindex","-1"),AttrModule.Handler("click",function()
   {
    return function()
    {
     y.Set(yc.Get()-1);
     return ccv.Set(DatePickerType.DayPicker);
    };
   })],[Doc.TextView(View.Map(function(a)
   {
    return Global.String(a-1);
   },ycv))]),Doc.Element("button",[AttrProxy.Create("class","calendar-btn year"),AttrProxy.Create("type","button"),AttrProxy.Create("tabindex","-1"),AttrModule.Handler("click",function()
   {
    return function()
    {
     y.Set(yc.Get()-0);
     return ccv.Set(DatePickerType.DayPicker);
    };
   })],[Doc.TextView(View.Map(function(a)
   {
    return Global.String(a-0);
   },ycv))])])]))]))]);
  }
  function dayPicker()
  {
   var dpd;
   function datelist(year,month)
   {
    return createDateRange4(calendarStartDate(year,month),lastSaturday(year,month));
   }
   function datelistByWeek(year,month)
   {
    return Seq.chunkBySize(7,datelist(year,month));
   }
   function calday(day)
   {
    var $1,$2,c,c$1,c$2,c$3,c$4,c$5,c$6;
    return Doc.Element("td",[AttrProxy.Create("class","calendar-cell")],[Doc.Element("clr-day",List.ofArray([AttrProxy.Create("class","day")]),List.ofArray([($1=(new Date(day)).getDate(),(dd.Get(),$2=(new Date(day)).getMonth()+1,$2!==m.Get()?Doc.Element("button",[AttrProxy.Create("class","day-btn is-disabled"),AttrProxy.Create("type","button"),AttrProxy.Create("tabindex","-1"),AttrModule.Handler("click",function($3)
    {
     return function($4)
     {
      return dayClickHandler($3,$4);
     };
    })],[Doc.TextNode((c=(new Date(day)).getDate(),Global.String(c)))]):$1===(c$1=(c$2=Date.now(),DateUtil.DatePortion(c$2)),(new Date(c$1)).getDate())&&$2===(c$3=(c$4=Date.now(),DateUtil.DatePortion(c$4)),(new Date(c$3)).getMonth()+1)?Doc.Element("button",[AttrProxy.Create("class","day-btn is-today"),AttrProxy.Create("type","button"),AttrProxy.Create("tabindex","-1"),AttrModule.Handler("click",function($3)
    {
     return function($4)
     {
      return dayClickHandler($3,$4);
     };
    })],[Doc.TextNode((c$5=(new Date(day)).getDate(),Global.String(c$5)))]):Doc.Element("button",[AttrProxy.Create("class","day-btn"),AttrProxy.Create("type","button"),AttrProxy.Create("tabindex","-1"),AttrModule.Handler("click",function($3)
    {
     return function($4)
     {
      return dayClickHandler($3,$4);
     };
    })],[Doc.TextNode((c$6=(new Date(day)).getDate(),Global.String(c$6)))])))]))]);
   }
   function calrow(w)
   {
    return Doc.Element("tr",[AttrProxy.Create("class","calendar-row")],Seq.delay(function()
    {
     return Seq.map(calday,w);
    }));
   }
   function calRows(year,month)
   {
    return Seq.delay(function()
    {
     return Seq.map(calrow,datelistByWeek(year,month));
    });
   }
   dpd=Doc.BindView(function(v)
   {
    return Doc.Element("clr-daypicker",List.ofArray([AttrProxy.Create("class","daypicker")]),List.ofArray([Doc.Element("div",[AttrProxy.Create("class","calendar-header")],[Doc.Element("div",[AttrProxy.Create("class","calendar-pickers")],[Doc.Element("button",[AttrProxy.Create("class","calendar-btn monthpicker-trigger"),AttrProxy.Create("type","button"),AttrModule.Handler("click",function($1)
    {
     return function($2)
     {
      return activateMonthPicker($1,$2);
     };
    })],[Doc.TextNode(Clarity.MonthNameFromMonthNumber(v.Month))]),Doc.Element("button",[AttrProxy.Create("class","calendar-btn yearpicker-trigger"),AttrProxy.Create("type","button"),AttrModule.Handler("click",function($1)
    {
     return function($2)
     {
      return activateYearPicker($1,$2);
     };
    })],[Doc.TextNode(Global.String(v.Year))])]),Doc.Element("div",[AttrProxy.Create("class","calendar-switchers")],[Doc.Element("button",[AttrProxy.Create("class","calendar-btn switcher"),AttrProxy.Create("type","button"),AttrModule.Handler("click",function($1)
    {
     return function($2)
     {
      return previousMonthHandler($1,$2);
     };
    })],[Doc.Element("clr-icon",List.ofArray([AttrProxy.Create("dir","left"),AttrProxy.Create("shape","angle")]),List.T.Empty)]),Doc.Element("button",[AttrProxy.Create("class","calendar-btn switcher"),AttrProxy.Create("type","button"),AttrModule.Handler("click",function($1)
    {
     return function($2)
     {
      return currentMonthHandler($1,$2);
     };
    })],[Doc.Element("clr-icon",List.ofArray([AttrProxy.Create("shape","event")]),List.T.Empty)]),Doc.Element("button",[AttrProxy.Create("class","calendar-btn switcher"),AttrProxy.Create("type","button"),AttrModule.Handler("click",function($1)
    {
     return function($2)
     {
      return nextMonthHandler($1,$2);
     };
    })],[Doc.Element("clr-icon",List.ofArray([AttrProxy.Create("dir","right"),AttrProxy.Create("shape","angle")]),List.T.Empty)])])]),Doc.Element("clr-calendar",List.T.Empty,List.ofArray([Doc.Element("table",[AttrProxy.Create("class","calendar-table weekdays")],[Doc.Element("tbody",[],[Doc.Element("tr",[AttrProxy.Create("class","calendar-row")],[Doc.Element("td",[AttrProxy.Create("class","calendar-cell")],[Doc.TextNode("S")]),Doc.Element("td",[AttrProxy.Create("class","calendar-cell")],[Doc.TextNode("M")]),Doc.Element("td",[AttrProxy.Create("class","calendar-cell")],[Doc.TextNode("T")]),Doc.Element("td",[AttrProxy.Create("class","calendar-cell")],[Doc.TextNode("W")]),Doc.Element("td",[AttrProxy.Create("class","calendar-cell")],[Doc.TextNode("T")]),Doc.Element("td",[AttrProxy.Create("class","calendar-cell")],[Doc.TextNode("F")]),Doc.Element("td",[AttrProxy.Create("class","calendar-cell")],[Doc.TextNode("S")])])])]),Doc.Element("table",[AttrProxy.Create("class","calendar-table calendar-dates")],[Doc.Element("tbody",[],[Doc.Concat(calRows(v.Year,v.Month))])])]))]));
   },cdp.get_View());
   return List.ofArray([Doc.Element("clr-datepicker-view-manager",List.ofArray([AttrProxy.Create("class","datepicker"),AttrProxy.Create("tabindex","0"),AttrProxy.Create("id","datepicker")]),List.ofArray([dpd]))]);
  }
  dd=Var$1.Lens(cdp,function($1)
  {
   return $1.Day;
  },function($1,$2)
  {
   return ClarityDatePickerVar.New($1.TheDate,$1.Month,$1.Year,$2);
  });
  m=Var$1.Lens(cdp,function($1)
  {
   return $1.Month;
  },function($1,$2)
  {
   return ClarityDatePickerVar.New($1.TheDate,$2,$1.Year,$1.Day);
  });
  y=Var$1.Lens(cdp,function($1)
  {
   return $1.Year;
  },function($1,$2)
  {
   return ClarityDatePickerVar.New($1.TheDate,$1.Month,$2,$1.Day);
  });
  cal=Var$1.Create$1(DatePickerViewManager.New(DatePickerType.Invisible));
  ccv=Var$1.Lens(cal,function($1)
  {
   return $1.CurrentView;
  },function($1,$2)
  {
   return(function()
   {
    return DatePickerViewManager.New;
   }($1))($2);
  });
  ciw=Clarity.ClarityInputWrapper([Clarity.ClarityInputGroup([Doc.BindView(function(a)
  {
   return Doc.Element("input",[AttrProxy.Create("type","text"),AttrProxy.Create("value",Global.String(a.Day)+"/"+Global.String(a.Month)+"/"+Global.String(a.Year))],[]);
  },cdp.get_View()),Doc.Element("button",[AttrProxy.Create("type","button"),AttrProxy.Create("class","clr-input-group-icon-action"),AttrModule.Handler("click",function($1)
  {
   return function($2)
   {
    return clickHandler($1,$2);
   };
  })],[Doc.Element("clr-icon",List.ofArray([AttrProxy.Create("shape","calendar")]),List.T.Empty)]),Doc.BindView(function(v)
  {
   var m$1;
   return Doc.Concat((m$1=v.CurrentView,m$1.$==1?dayPicker():m$1.$==2?monthPicker():m$1.$==3?yearPicker():(self.document.removeEventListener("click",listen),List.ofArray([Doc.Verbatim("<!---->")]))));
  },cal.get_View())])]);
  return Clarity.ClarityControlContainer(Var$1.Create$1(false).get_View(),[ciw]);
 };
 Clarity.MonthNameFromMonthNumber=function(m)
 {
  if(m===1)
   return"Jan";
  else
   if(m===2)
    return"Feb";
   else
    if(m===3)
     return"Mar";
    else
     if(m===4)
      return"Apr";
     else
      if(m===5)
       return"May";
      else
       if(m===6)
        return"Jun";
       else
        if(m===7)
         return"Jul";
        else
         if(m===8)
          return"Aug";
         else
          if(m===9)
           return"Sep";
          else
           if(m===10)
            return"Oct";
           else
            if(m===11)
             return"Nov";
            else
             if(m===12)
              return"Dec";
             else
              throw new MatchFailureException.New("Clarity.fs",274,14);
 };
 Clarity.ClarityDateContainer=function(children)
 {
  return Doc.Element("clr-date-container",List.ofArray([AttrProxy.Create("class","clr-form-control")]),children);
 };
 Clarity.ClarityInputGroup=function(children)
 {
  return Doc.Element("div",[AttrProxy.Create("class","clr-input-group")],children);
 };
 Clarity.ClaritySelect=function(attrs,csv)
 {
  var Id,wdoc,d2;
  Id=csv.Get().Id;
  wdoc=Clarity.ClaritySelectWrapper([Doc.Select(new List.T({
   $:1,
   $0:AttrProxy.Create("id",Id),
   $1:new List.T({
    $:1,
    $0:AttrProxy.Create("class","clr-select"),
    $1:attrs
   })
  }),function(value)
  {
   return typeof value=="string"?value:(function($1)
   {
    return function($2)
    {
     return $1(Utils.prettyPrint($2));
    };
   }(Global.id))(value);
  },csv.Get().Values,Var$1.Lens(csv,function($1)
  {
   return $1.Selection;
  },function($1,$2)
  {
   return ClaritySelectVar.New($2,$1.ErrorState,$1.Values,$1.SubText,$1.Id,$1.Label);
  })),Doc.Element("clr-icon",List.ofArray([AttrProxy.Create("class","clr-validate-icon"),AttrProxy.Create("shape","exclamation-circle")]),List.T.Empty)]);
  d2=Clarity.ClarityControlContainer(Var$1.Lens(csv,function($1)
  {
   return $1.ErrorState;
  },function($1,$2)
  {
   return ClaritySelectVar.New($1.Selection,$2,$1.Values,$1.SubText,$1.Id,$1.Label);
  }).get_View(),[wdoc,Doc.Element("span",[AttrProxy.Create("class","clr-subtext")],[Doc.TextView(Var$1.Lens(csv,function($1)
  {
   return $1.SubText;
  },function($1,$2)
  {
   return ClaritySelectVar.New($1.Selection,$1.ErrorState,$1.Values,$2,$1.Id,$1.Label);
  }).get_View())])]);
  return Clarity.ClarityFormControl([Clarity.ClarityControlLabel([AttrProxy.Create("for",Id)],csv.Get().Label),d2]);
 };
 Clarity.ClarityPassword=function(attrs,civ)
 {
  var Id,wdoc,d2;
  Id=civ.Get().Id;
  wdoc=Clarity.ClarityInputWrapper([Doc.PasswordBox(new List.T({
   $:1,
   $0:AttrProxy.Create("placeholder",civ.Get().Placeholder),
   $1:new List.T({
    $:1,
    $0:AttrProxy.Create("id",Id),
    $1:new List.T({
     $:1,
     $0:AttrProxy.Create("type","text"),
     $1:new List.T({
      $:1,
      $0:AttrProxy.Create("class","clr-input"),
      $1:attrs
     })
    })
   })
  }),Var$1.Lens(civ,function($1)
  {
   return $1.Value;
  },function($1,$2)
  {
   return ClarityInputVar.New($2,$1.Label,$1.ErrorState,$1.SubText,$1.Placeholder,$1.Id);
  })),Doc.Element("clr-icon",List.ofArray([AttrProxy.Create("class","clr-validate-icon"),AttrProxy.Create("shape","exclamation-circle")]),List.T.Empty)]);
  d2=Clarity.ClarityControlContainer(Var$1.Lens(civ,function($1)
  {
   return $1.ErrorState;
  },function($1,$2)
  {
   return ClarityInputVar.New($1.Value,$1.Label,$2,$1.SubText,$1.Placeholder,$1.Id);
  }).get_View(),[wdoc,Doc.Element("span",[AttrProxy.Create("class","clr-subtext")],[Doc.TextView(Var$1.Lens(civ,function($1)
  {
   return $1.SubText;
  },function($1,$2)
  {
   return ClarityInputVar.New($1.Value,$1.Label,$1.ErrorState,$2,$1.Placeholder,$1.Id);
  }).get_View())])]);
  return Clarity.ClarityFormControl([Clarity.ClarityControlLabel([AttrProxy.Create("for",Id)],civ.Get().Label),d2]);
 };
 Clarity.ClarityInput=function(attrs,civ)
 {
  var Id,wdoc,d2;
  Id=civ.Get().Id;
  wdoc=Clarity.ClarityInputWrapper([Doc.Input(new List.T({
   $:1,
   $0:AttrProxy.Create("placeholder",civ.Get().Placeholder),
   $1:new List.T({
    $:1,
    $0:AttrProxy.Create("id",Id),
    $1:new List.T({
     $:1,
     $0:AttrProxy.Create("type","text"),
     $1:new List.T({
      $:1,
      $0:AttrProxy.Create("class","clr-input"),
      $1:attrs
     })
    })
   })
  }),Var$1.Lens(civ,function($1)
  {
   return $1.Value;
  },function($1,$2)
  {
   return ClarityInputVar.New($2,$1.Label,$1.ErrorState,$1.SubText,$1.Placeholder,$1.Id);
  })),Doc.Element("clr-icon",List.ofArray([AttrProxy.Create("class","clr-validate-icon"),AttrProxy.Create("shape","exclamation-circle")]),List.T.Empty)]);
  d2=Clarity.ClarityControlContainer(Var$1.Lens(civ,function($1)
  {
   return $1.ErrorState;
  },function($1,$2)
  {
   return ClarityInputVar.New($1.Value,$1.Label,$2,$1.SubText,$1.Placeholder,$1.Id);
  }).get_View(),[wdoc,Doc.Element("span",[AttrProxy.Create("class","clr-subtext")],[Doc.TextView(Var$1.Lens(civ,function($1)
  {
   return $1.SubText;
  },function($1,$2)
  {
   return ClarityInputVar.New($1.Value,$1.Label,$1.ErrorState,$2,$1.Placeholder,$1.Id);
  }).get_View())])]);
  return Clarity.ClarityFormControl([Clarity.ClarityControlLabel([AttrProxy.Create("for",Id)],civ.Get().Label),d2]);
 };
 Clarity.ClarityCheckbox=function(attrs,ccv)
 {
  var res,stw,d2;
  ccv.Get();
  res=Doc.BindView(Doc.Concat,ccv.Get().Options.MapLens(function(k,vp)
  {
   return Clarity.ClarityCheckboxWrapper([Doc.CheckBox([AttrProxy.Create("id",vp.Get().Option)],Var$1.Lens(vp,function($1)
   {
    return $1.Checked;
   },function($1,$2)
   {
    return ClarityCheckboxItem.New($1.Option,$2);
   })),Clarity.ClarityControlLabel([AttrProxy.Create("for",vp.Get().Option)],vp.Get().Option)]);
  }));
  stw=Clarity.ClaritySelectWrapper([Doc.Element("clr-icon",List.ofArray([AttrProxy.Create("class","clr-validate-icon"),AttrProxy.Create("shape","exclamation-circle")]),List.T.Empty),Doc.Element("span",[AttrProxy.Create("class","clr-subtext")],[Doc.TextView(Var$1.Lens(ccv,function($1)
  {
   return $1.SubText;
  },function($1,$2)
  {
   return ClarityCheckboxVar.New($1.Id,$1.ErrorState,$2,$1.Options,$1.Label);
  }).get_View())])]);
  d2=List.ofArray([Clarity.ClarityControlContainer(Var$1.Lens(ccv,function($1)
  {
   return $1.ErrorState;
  },function($1,$2)
  {
   return ClarityCheckboxVar.New($1.Id,$2,$1.SubText,$1.Options,$1.Label);
  }).get_View(),[res]),stw]);
  return Clarity.ClarityFormControl(new List.T({
   $:1,
   $0:Clarity.ClarityControlLabel([],ccv.Get().Label),
   $1:d2
  }));
 };
 Clarity.ClaritySubtextWrapper=function(children)
 {
  return Doc.Element("div",[AttrProxy.Create("class","clr-subtext-wrapper")],children);
 };
 Clarity.ClarityControlLabel=function(attrs,labelText)
 {
  return Doc.Element("label",Seq.append(attrs,[AttrProxy.Create("class","clr-control-label")]),[Doc.TextNode(labelText)]);
 };
 Clarity.ClarityControlContainer=function(showError,children)
 {
  return Doc.Element("div",[AttrProxy.Create("class","clr-control-container"),AttrModule.DynamicClassPred("clr-error",showError)],children);
 };
 Clarity.ClarityCheckboxWrapper=function(children)
 {
  return Doc.Element("div",[AttrProxy.Create("class","clr-checkbox-wrapper")],children);
 };
 Clarity.ClarityFormControl=function(children)
 {
  return Doc.Element("div",[AttrProxy.Create("class","clr-form-control")],children);
 };
 Clarity.ClaritySelectWrapper=function(children)
 {
  return Doc.Element("div",[AttrProxy.Create("class","clr-select-wrapper")],children);
 };
 Clarity.ClarityInputWrapper=function(children)
 {
  return Doc.Element("div",[AttrProxy.Create("class","clr-input-wrapper")],children);
 };
 Clarity.ClarityButton=function(spec,callback)
 {
  var classes,t,vpred,vstr,vsize;
  classes=Strings.concat(" ",["btn",(t=spec.Get().Type,t.$==1?"btn-success":t.$==3?"btn-danger":t.$==2?"btn-warning":t.$==4?"btn-outline":t.$==5?"btn-success-outline":t.$==6?"btn-info-outline":t.$==7?"btn-warning-outline":t.$==8?"btn-danger-outline":t.$==9?"btn-link":t.$==10?"":t.$==11?"btn-link":"btn-primary")]);
  vpred=View.Map(function($1)
  {
   return $1.Disabled;
  },spec.get_View());
  vstr=Var$1.Create$1("").get_View();
  vsize=View.Map(function(p)
  {
   return p.$!=1;
  },View.Map(function($1)
  {
   return $1.Size;
  },spec.get_View()));
  return Doc.Button(spec.Get().Text,[AttrProxy.Create("class",classes),((Clarity.AttrDisabledDyn())(vpred))(vstr),(Clarity.ButtonSizePred())(vsize)],callback);
 };
 Clarity.ClarityColumn=function(columnWidths,children)
 {
  return Doc.Element("div",Seq.map(function(w)
  {
   var m;
   m=w.ColumnWidth;
   return m.$==1?Clarity.ColumnWidthSmall(w.Quantity):m.$==2?Clarity.ColumnWidthMedium(w.Quantity):m.$==3?Clarity.ColumnWidthLarge(w.Quantity):m.$==4?Clarity.ColumnWidthExtraLarge(w.Quantity):Clarity.ColumnWidthExtraSmall(w.Quantity);
  },columnWidths),children);
 };
 Clarity.ColumnWidthExtraLarge=function(n)
 {
  return AttrProxy.Create("class","clr-col-xl-"+Global.String(n));
 };
 Clarity.ColumnWidthLarge=function(n)
 {
  return AttrProxy.Create("class","clr-col-lg-"+Global.String(n));
 };
 Clarity.ColumnWidthMedium=function(n)
 {
  return AttrProxy.Create("class","clr-col-md-"+Global.String(n));
 };
 Clarity.ColumnWidthSmall=function(n)
 {
  return AttrProxy.Create("class","clr-col-sm-"+Global.String(n));
 };
 Clarity.ColumnWidthExtraSmall=function(n)
 {
  return AttrProxy.Create("class","clr-col-"+Global.String(n));
 };
 Clarity.ClarityRow=function(children)
 {
  return Doc.Element("div",[AttrProxy.Create("class","clr-row")],children);
 };
 Clarity.ButtonSizePred=function()
 {
  SC$1.$cctor();
  return SC$1.ButtonSizePred;
 };
 Clarity.AttrDisabledDyn=function()
 {
  SC$1.$cctor();
  return SC$1.AttrDisabledDyn;
 };
 SC$1.$cctor=function()
 {
  SC$1.$cctor=Global.ignore;
  SC$1.AttrDisabledDyn=(Runtime.Curried3(AttrModule.DynamicPred))("disabled");
  SC$1.ButtonSizePred=function(i)
  {
   return AttrModule.DynamicClassPred("btn-sm",i);
  };
 };
 Client.Main=function()
 {
  var varText,d,rvInput,submit,vReversed,b,_this,p,i;
  varText=Var$1.Create$1("initial value");
  d=Doc.BindView(Doc.Concat,View.MapSeqCached(function(i$1)
  {
   return Doc.Element("li",[],[Doc.TextNode(Global.String(i$1))]);
  },Client.its().get_View()));
  rvInput=Var$1.Create$1("");
  submit=Submitter.CreateOption(rvInput.get_View());
  vReversed=View.MapAsync(function(a)
  {
   var b$1;
   return a!=null&&a.$==1?(new AjaxRemotingProvider.New()).Async("ws2:ws2.Server.DoSomething:-1840423385",[a.$0]):(b$1=null,Concurrency.Delay(function()
   {
    return Concurrency.Return("");
   }));
  },submit.view);
  return Doc.Element("div",[],[Clarity.ClarityRow([Clarity.ClarityColumn([ColumnDef.New(4,ClarityColumnWidth.ExtraSmall)],[Doc.Element("span",[AttrProxy.Create("style","justify-content: center;display:flex")],[Doc.TextNode("4")])]),Clarity.ClarityColumn([ColumnDef.New(4,ClarityColumnWidth.ExtraSmall)],[Clarity.ClarityDatePicker(Client.cdp())]),Clarity.ClarityColumn([ColumnDef.New(4,ClarityColumnWidth.ExtraSmall)],[Clarity.ClarityCard(Client.cbcv1())]),Clarity.ClarityColumn([ColumnDef.New(4,ClarityColumnWidth.ExtraSmall)],[Clarity.ClarityCard(Client.cbcv2())])]),Doc.Element("div",[AttrProxy.Create("class","login-wrapper")],[Doc.Element("form",[AttrProxy.Create("class","login")],[Doc.Element("section",[AttrProxy.Create("class","title")],[Doc.Element("h3",[AttrProxy.Create("class","welcome")],[Doc.TextNode("Welcome to")]),Doc.TextNode("Company Product Name"),Doc.Element("h5",[AttrProxy.Create("class","hint")],[Doc.TextNode("Use your Company ID to sign in or create one now")])]),Doc.Element("div",[AttrProxy.Create("class","login-group")],[Doc.Element("div",[AttrProxy.Create("class","clr-control-container clr-form-control")],[Doc.Element("div",[AttrProxy.Create("class","clr-select-wrapper")],[Doc.Element("select",[],[Doc.Element("option",[AttrProxy.Create("value","local")],[Doc.TextNode("Local Users")]),Doc.Element("option",[AttrProxy.Create("value","admin")],[Doc.TextNode("Administrator")])])])]),Clarity.ClarityInput(List.T.Empty,Client.username()),Clarity.ClarityPassword(List.T.Empty,Client.password()),Doc.Element("div",[],[Doc.TextView(Client.sel().get_View()),Doc.TextView(Var$1.Lens(Client.username(),function($1)
  {
   return $1.Value;
  },function($1,$2)
  {
   return ClarityInputVar.New($2,$1.Label,$1.ErrorState,$1.SubText,$1.Placeholder,$1.Id);
  }).get_View()),Doc.TextView(varText.get_View())]),Clarity.ClaritySelect(List.T.Empty,Client.csvV()),Clarity.ClarityInput(List.T.Empty,Client.civV()),Clarity.ClarityCheckbox(List.T.Empty,Client.checks()),Doc.Element("div",[],[Doc.TextView(Client.csvSel())]),Clarity.ClarityButton(Client.but1(),function()
  {
   Var$1.Lens(Client.but1(),function($1)
   {
    return $1.Disabled;
   },function($1,$2)
   {
    return ClarityButtonSpec.New($1.Type,$2,$1.Size,$1.Text);
   }).Set(true);
  })])])]),Doc.Input([],rvInput),Doc.Button("Send",[],function()
  {
   submit.Trigger();
  }),Doc.Button("Get",[],function()
  {
   Client.GetN();
  }),Doc.Element("hr",[],[]),Doc.Element("h4",[AttrProxy.Create("class","text-muted")],[Doc.TextNode("The server responded:")]),Doc.Element("div",[AttrProxy.Create("class","jumbotron")],[Doc.Element("h1",[],[Doc.TextView(vReversed)])]),Doc.Element("ul",[],[d]),(b=(_this=new ProviderBuilder.New$1(),(_this.h.push({
   $:0,
   $0:"content",
   $1:d
  }),_this)),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],ws2_Templates.t(p[0])),b.i=i,i))).get_Doc()]);
 };
 Client.GetN=function()
 {
  Client.GetNames(null,function(l)
  {
   Client.f(l);
  });
 };
 Client.f2=function(n)
 {
  Client.its().Set(List.ofArray([n]));
 };
 Client.f=function(l)
 {
  var a;
  a=List.ofSeq(l);
  Client.its().Set(a);
 };
 Client.it=function(mytext)
 {
  return Doc.Element("li",[],[Doc.TextNode(mytext)]);
 };
 Client.GetNames=function(u,callback)
 {
  var b;
  Concurrency.Start((b=null,Concurrency.Delay(function()
  {
   return Concurrency.Bind((new AjaxRemotingProvider.New()).Async("ws2:ws2.Server.GetNames:-1913616411",[]),function(a)
   {
    callback(a);
    return Concurrency.Return(null);
   });
  })),null);
 };
 Client.v2=function()
 {
  SC$2.$cctor();
  return SC$2.v2;
 };
 Client.loginType=function()
 {
  SC$2.$cctor();
  return SC$2.loginType;
 };
 Client.sel2=function()
 {
  SC$2.$cctor();
  return SC$2.sel2;
 };
 Client.sel=function()
 {
  SC$2.$cctor();
  return SC$2.sel;
 };
 Client.its=function()
 {
  SC$2.$cctor();
  return SC$2.its;
 };
 Client.pv=function()
 {
  SC$2.$cctor();
  return SC$2.pv;
 };
 Client.cbcv2=function()
 {
  SC$2.$cctor();
  return SC$2.cbcv2;
 };
 Client.cbcv1=function()
 {
  SC$2.$cctor();
  return SC$2.cbcv1;
 };
 Client.cdp=function()
 {
  SC$2.$cctor();
  return SC$2.cdp;
 };
 Client.but1=function()
 {
  SC$2.$cctor();
  return SC$2.but1;
 };
 Client.observe2=function(v)
 {
  console.log(v);
 };
 Client.nnn=function()
 {
  SC$2.$cctor();
  return SC$2.nnn;
 };
 Client.item=function()
 {
  SC$2.$cctor();
  return SC$2.item;
 };
 Client.mmm=function()
 {
  SC$2.$cctor();
  return SC$2.mmm;
 };
 Client.checks=function()
 {
  SC$2.$cctor();
  return SC$2.checks;
 };
 Client.password=function()
 {
  SC$2.$cctor();
  return SC$2.password;
 };
 Client.username=function()
 {
  SC$2.$cctor();
  return SC$2.username;
 };
 Client.civV=function()
 {
  SC$2.$cctor();
  return SC$2.civV;
 };
 Client.civ=function()
 {
  SC$2.$cctor();
  return SC$2.civ;
 };
 Client.observe=function(v)
 {
  console.log(v);
  v==="6"?(Client.stv().Set("some new helper"),Client.selV().Set("4"),Client.showError().Set(true)):void 0;
 };
 Client.csvSel=function()
 {
  SC$2.$cctor();
  return SC$2.csvSel;
 };
 Client.showError=function()
 {
  SC$2.$cctor();
  return SC$2.showError;
 };
 Client.selV=function()
 {
  SC$2.$cctor();
  return SC$2.selV;
 };
 Client.stv=function()
 {
  SC$2.$cctor();
  return SC$2.stv;
 };
 Client.csvV=function()
 {
  SC$2.$cctor();
  return SC$2.csvV;
 };
 Client.csv=function()
 {
  SC$2.$cctor();
  return SC$2.csv;
 };
 Client.factory=function()
 {
  SC$2.$cctor();
  return SC$2.factory;
 };
 SC$2.$cctor=function()
 {
  var en;
  SC$2.$cctor=Global.ignore;
  SC$2.factory=(en=Enumerator.Get(Seq.initInfinite(Global.id)),function()
  {
   en.MoveNext();
   return en.Current();
  });
  SC$2.csv=ClaritySelectVar.New("4",false,List.ofArray(["4","5","6"]),"Helper Text","MySelect","This is my label");
  SC$2.csvV=Var$1.Create$1(Client.csv());
  SC$2.stv=Var$1.Lens(Client.csvV(),function(p)
  {
   return p.SubText;
  },function($1,$2)
  {
   return ClaritySelectVar.New($1.Selection,$1.ErrorState,$1.Values,$2,$1.Id,$1.Label);
  });
  SC$2.selV=Var$1.Lens(Client.csvV(),function(p)
  {
   return p.Selection;
  },function($1,$2)
  {
   return ClaritySelectVar.New($2,$1.ErrorState,$1.Values,$1.SubText,$1.Id,$1.Label);
  });
  SC$2.showError=Var$1.Lens(Client.csvV(),function(p)
  {
   return p.ErrorState;
  },function($1,$2)
  {
   return ClaritySelectVar.New($1.Selection,$2,$1.Values,$1.SubText,$1.Id,$1.Label);
  });
  SC$2.csvSel=View.Map(function(i)
  {
   return i.Selection;
  },Client.csvV().get_View());
  View.Sink(function(v)
  {
   Client.observe(v);
  },Client.csvSel());
  SC$2.civ=ClarityInputVar.New("","Some label",false,"Helper text","placeholder text","MyInput");
  SC$2.civV=Var$1.Create$1(Client.civ());
  SC$2.username=Var$1.Create$1(ClarityInputVar.New("","Username",false,"Please enter your username","username","IdUsername"));
  SC$2.password=Var$1.Create$1(ClarityInputVar.New("","Password",false,"Please enter your pasword","password","IdPassword"));
  SC$2.checks=Var$1.Create$1(ClarityCheckboxVar.New("IdCheck",false,"Choose some options",ListModel.FromSeq([ClarityCheckboxItem.New("Option 1",false),ClarityCheckboxItem.New("Option 2",false)]),"Checkboxes"));
  SC$2.mmm=Client.checks().Get().Options;
  SC$2.item=ClarityCheckboxItem.New("Option 1",false);
  SC$2.nnn=Client.mmm().Lens(Client.item());
  View.Sink(function(v)
  {
   Client.observe2(v);
  },Client.mmm().v);
  SC$2.but1=Var$1.Create$1(ClarityButtonSpec.New(ClarityButtonType.Danger,false,ButtonSize.Small,"Press Me!"));
  SC$2.cdp=Var$1.Create$1(ClarityDatePickerVar.New("",3,2019,24));
  SC$2.cbcv1={
   $:0,
   $0:ClarityBasicCardVar.New("Header",List.ofArray([{
    $:1,
    $0:ClarityImage.New("/images/placeholder_350x150.png","")
   },{
    $:0,
    $0:ClarityCardBlock.New("Block","Card content can contain text, links, images, data visualizations, lists and more.",{
     $:1,
     $0:CardMediaBlock.New(ClarityImage.New("/images/placeholder_60x60.png",""),"Project A","John Doe")
    })
   }]),List.ofArray([ClarityAction.New("Footer Action 1",function()
   {
    console.log("Action 1 hit");
   }),ClarityAction.New("Footer Action 2",function()
   {
    console.log("Action 2 hit");
   }),ClarityAction.New("Footer Action 3",function()
   {
    console.log("Action 3 hit");
   }),ClarityAction.New("Footer Action 4",function()
   {
    console.log("Action 4 hit");
   })]),{
    $:1,
    $0:function()
    {
     console.log("Main Action hit");
    }
   })
  };
  SC$2.cbcv2={
   $:1,
   $0:ClarityImageCardVar.New({
    $:1,
    $0:function()
    {
     console.log("Main Action hit");
    }
   },{
    $:1,
    $0:ClarityImage.New("/images/placeholder_350x150.png","")
   })
  };
  SC$2.pv=View.Map(function($1)
  {
   return $1.Label;
  },Client.civV().get_View());
  SC$2.its=Var$1.Create$1(List.T.Empty);
  SC$2.sel=Var$1.Create$1("1");
  SC$2.sel2=Var$1.Create$1(1);
  SC$2.loginType=Var$1.Create$1("local");
  SC$2.v2=View.Map(function(i)
  {
   return(function($1)
   {
    return function($2)
    {
     return $1(Utils.prettyPrint($2));
    };
   }(Global.id))(i);
  },Client.sel2().get_View());
 };
 ws2_Templates.t=function(h)
 {
  return h?Templates.GetOrLoadTemplate("my-template",null,function()
  {
   return DomUtility.ParseHTMLIntoFakeRoot("<div>\r\n    <ul>\r\n        <li ws-replace=\"Content\"></li>\r\n    </ul>\r\n</div>");
  },h):Templates.PrepareTemplate("my-template",null,function()
  {
   return DomUtility.ParseHTMLIntoFakeRoot("<div>\r\n    <ul>\r\n        <li ws-replace=\"Content\"></li>\r\n    </ul>\r\n</div>");
  });
 };
}());

//# sourceMappingURL=ws2.map