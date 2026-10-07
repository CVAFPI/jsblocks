const JS = javascript.javascriptGenerator;
const define = Blockly.common.defineBlocksWithJsonArray;

define([
 {type:"console_log",message0:"console.log %1",args0:[{type:"input_value",name:"VALUE"}],previousStatement:null,nextStatement:null,colour:210},
 {type:"console_table",message0:"console.table %1",args0:[{type:"input_value",name:"VALUE"}],previousStatement:null,nextStatement:null,colour:210},
 {type:"alert",message0:"alert %1",args0:[{type:"input_value",name:"VALUE"}],previousStatement:null,nextStatement:null,colour:210},
 {type:"variable_set",message0:"set %1 to %2",args0:[{type:"field_input",name:"NAME",text:"message"},{type:"input_value",name:"VALUE"}],previousStatement:null,nextStatement:null,colour:330},
 {type:"variable_get",message0:"get %1",args0:[{type:"field_input",name:"NAME",text:"message"}],output:null,colour:330},
 {type:"if",message0:"if %1",args0:[{type:"input_value",name:"COND"}],message1:"do %1",args1:[{type:"input_statement",name:"DO"}],message2:"else %1",args2:[{type:"input_statement",name:"ELSE"}],previousStatement:null,nextStatement:null,colour:120},
 {type:"repeat",message0:"repeat %1 times",args0:[{type:"field_number",name:"N",value:10,min:0}],message1:"do %1",args1:[{type:"input_statement",name:"DO"}],previousStatement:null,nextStatement:null,colour:120},
 {type:"jsblock_for",message0:"for %1 from %2 to %3 step %4",args0:[{type:"field_input",name:"VAR",text:"i"},{type:"input_value",name:"START"},{type:"input_value",name:"END"},{type:"input_value",name:"STEP"}],message1:"do %1",args1:[{type:"input_statement",name:"DO"}],previousStatement:null,nextStatement:null,colour:120},
 {type:"jsblock_while",message0:"while %1",args0:[{type:"input_value",name:"COND"}],message1:"do %1",args1:[{type:"input_statement",name:"DO"}],previousStatement:null,nextStatement:null,colour:120},
 {type:"wait",message0:"await wait %1 ms",args0:[{type:"field_number",name:"MS",value:1000,min:0}],previousStatement:null,nextStatement:null,colour:210},
 {type:"function",message0:"function %1 (%2)",args0:[{type:"field_input",name:"NAME",text:"myFunction"},{type:"field_input",name:"ARGS",text:""}],message1:"do %1",args1:[{type:"input_statement",name:"DO"}],previousStatement:null,nextStatement:null,colour:290},
 {type:"return",message0:"return %1",args0:[{type:"input_value",name:"VALUE"}],previousStatement:null,nextStatement:null,colour:290},
 {type:"comment",message0:"// %1",args0:[{type:"field_input",name:"TEXT",text:"comment"}],previousStatement:null,nextStatement:null,colour:60},
 {type:"js_source",message0:"%1 %2",args0:[{type:"field_input",name:"KIND",text:"JavaScript"},{type:"field_input",name:"CODE",text:"console.log('hello');"}],previousStatement:null,nextStatement:null,colour:45},
 {type:"jsblock_text",message0:"%1",args0:[{type:"field_input",name:"TEXT",text:"Hello world"}],output:null,colour:160},
 {type:"jsblock_compare",message0:"%1 %2 %3",args0:[{type:"input_value",name:"A"},{type:"field_dropdown",name:"OP",options:[["is equal to","==="],["is not equal to","!=="],["<","<"],["≤","<="],[">",">"],["≥",">="] ]},{type:"input_value",name:"B"}],output:"Boolean",colour:160},
 {type:"jsblock_logic",message0:"%1 %2 %3",args0:[{type:"input_value",name:"A"},{type:"field_dropdown",name:"OP",options:[["and","&&"],["or","||"]]},{type:"input_value",name:"B"}],output:"Boolean",colour:160},
 {type:"jsblock_not",message0:"not %1",args0:[{type:"input_value",name:"VALUE"}],output:"Boolean",colour:160},
 {type:"number",message0:"%1",args0:[{type:"field_number",name:"N",value:0}],output:null,colour:160},
 {type:"boolean",message0:"%1",args0:[{type:"field_dropdown",name:"V",options:[["true","true"],["false","false"]]}],output:null,colour:160},
 {type:"math",message0:"%1 %2 %3",args0:[{type:"input_value",name:"A"},{type:"field_dropdown",name:"OP",options:[["+","+"],["-","-"],["×","*"],["÷","/"],["===","==="],[">",">"],["<","<"] ]},{type:"input_value",name:"B"}],output:null,colour:160},
 {type:"jsblock_array",message0:"array %1",args0:[{type:"field_input",name:"ITEMS",text:"[1, 2, 3]"}],output:"Array",colour:160},
 {type:"jsblock_array_get",message0:"item %1 from %2",args0:[{type:"input_value",name:"INDEX"},{type:"input_value",name:"ARRAY"}],output:null,colour:160},
 {type:"jsblock_array_length",message0:"length of %1",args0:[{type:"input_value",name:"ARRAY"}],output:"Number",colour:160},
 {type:"jsblock_array_push",message0:"add %1 to end of %2",args0:[{type:"input_value",name:"VALUE"},{type:"input_value",name:"ARRAY"}],previousStatement:null,nextStatement:null,colour:160},
 {type:"jsblock_object",message0:"object %1",args0:[{type:"field_input",name:"PROPERTIES",text:"{\"name\": \"Ada\"}"}],output:"Object",colour:160},
 {type:"jsblock_property_get",message0:"property %1 of %2",args0:[{type:"input_value",name:"KEY"},{type:"input_value",name:"OBJECT"}],output:null,colour:160},
 {type:"jsblock_property_set",message0:"set property %1 of %2 to %3",args0:[{type:"input_value",name:"KEY"},{type:"input_value",name:"OBJECT"},{type:"input_value",name:"VALUE"}],previousStatement:null,nextStatement:null,colour:160},
 {type:"jsblock_string_method",message0:"%1 of %2",args0:[{type:"field_dropdown",name:"METHOD",options:[["uppercase","toUpperCase"],["lowercase","toLowerCase"],["trimmed","trim"]]},{type:"input_value",name:"TEXT"}],output:"String",colour:160},
 {type:"jsblock_string_contains",message0:"%1 contains %2",args0:[{type:"input_value",name:"TEXT"},{type:"input_value",name:"SEARCH"}],output:"Boolean",colour:160},
 {type:"jsblock_string_length",message0:"length of text %1",args0:[{type:"input_value",name:"TEXT"}],output:"Number",colour:160},
 {type:"query",message0:"document.querySelector %1",args0:[{type:"input_value",name:"SEL"}],output:null,colour:180},
 {type:"click",message0:"on click %1",args0:[{type:"input_value",name:"ELEMENT"}],message1:"do %1",args1:[{type:"input_statement",name:"DO"}],previousStatement:null,nextStatement:null,colour:180},
 {type:"variable_change",message0:"change %1 by %2 %3",args0:[{type:"field_input",name:"NAME",text:"score"},{type:"field_dropdown",name:"DIR",options:[["+","+"],["−","-"]]},{type:"input_value",name:"DELTA"}],previousStatement:null,nextStatement:null,colour:330},
 {type:"game_loop",message0:"on every frame do %1",args0:[{type:"input_statement",name:"DO"}],previousStatement:null,nextStatement:null,colour:25},
 {type:"clear_canvas",message0:"fill screen with %1",args0:[{type:"input_value",name:"COLOR"}],previousStatement:null,nextStatement:null,colour:25},
 {type:"draw_rect",message0:"draw rectangle x %1 y %2 width %3 height %4 color %5",args0:[{type:"input_value",name:"X"},{type:"input_value",name:"Y"},{type:"input_value",name:"W"},{type:"input_value",name:"H"},{type:"input_value",name:"COLOR"}],previousStatement:null,nextStatement:null,colour:25},
 {type:"draw_circle",message0:"draw circle x %1 y %2 radius %3 color %4",args0:[{type:"input_value",name:"X"},{type:"input_value",name:"Y"},{type:"input_value",name:"R"},{type:"input_value",name:"COLOR"}],previousStatement:null,nextStatement:null,colour:25},
 {type:"draw_text",message0:"draw text %1 x %2 y %3 size %4 color %5",args0:[{type:"input_value",name:"TEXT"},{type:"input_value",name:"X"},{type:"input_value",name:"Y"},{type:"input_value",name:"SIZE"},{type:"input_value",name:"COLOR"}],previousStatement:null,nextStatement:null,colour:25},
 {type:"key_down",message0:"key %1 is down",args0:[{type:"input_value",name:"KEY"}],output:"Boolean",colour:25},
 {type:"random",message0:"random from %1 to %2",args0:[{type:"input_value",name:"MIN"},{type:"input_value",name:"MAX"}],output:"Number",colour:25},
 {type:"clamp",message0:"keep %1 between %2 and %3",args0:[{type:"input_value",name:"VALUE"},{type:"input_value",name:"MIN"},{type:"input_value",name:"MAX"}],output:"Number",colour:25},
 {type:"screen_size",message0:"screen %1",args0:[{type:"field_dropdown",name:"SIZE",options:[["width","width"],["height","height"]]}],output:"Number",colour:25},
 {type:"rect_collision",message0:"rectangle A x %1 y %2 w %3 h %4 overlaps B x %5 y %6 w %7 h %8",args0:[{type:"input_value",name:"AX"},{type:"input_value",name:"AY"},{type:"input_value",name:"AW"},{type:"input_value",name:"AH"},{type:"input_value",name:"BX"},{type:"input_value",name:"BY"},{type:"input_value",name:"BW"},{type:"input_value",name:"BH"}],output:"Boolean",colour:25}
]);

const reservedNames=new Set("await break case catch class const continue debugger default delete do else enum export extends false finally for function if implements import in instanceof interface let new null package private protected public return static super switch this throw true try typeof var void while with yield arguments eval".split(" "));
function safeIdentifier(value,fallback){
 let name=String(value||fallback).replace(/[^A-Za-z0-9_$]/g,"_");
 if(!/^[A-Za-z_$]/.test(name))name=`${fallback}_${name}`;
 return reservedNames.has(name)?`${name}_`:name;
}
function variableName(block){return safeIdentifier(block.getFieldValue("NAME"),"value")}
function functionName(block){return safeIdentifier(block.getFieldValue("NAME"),"myFunction")}
function jsonLiteral(block,name,fallback){
 try{return JSON.stringify(JSON.parse(block.getFieldValue(name)))}catch(error){return fallback}
}

function gen(block){
  const val=n=>JS.valueToCode(block,n,JS.ORDER_ATOMIC)||"undefined";
  const stmt=n=>JS.statementToCode(block,n);
  switch(block.type){
    case"console_log":return `console.log(${val("VALUE")});\n`;
    case"console_table":return `console.table(${val("VALUE")});\n`;
    case"alert":return `alert(${val("VALUE")});\n`;
    case"variable_set":return `${variableName(block)} = ${val("VALUE")};\n`;
    case"variable_get":return [variableName(block),JS.ORDER_ATOMIC];
    case"if":return `if (${val("COND")}) {\n${stmt("DO")}}${stmt("ELSE")?` else {\n${stmt("ELSE")}}`:``}\n`;
    case"repeat":{
      const loopName=`__jsblockRepeat_${String(block.id).replace(/[^A-Za-z0-9_$]/g,"_")}`;
      return `for (let ${loopName} = 0; ${loopName} < ${Number(block.getFieldValue("N"))||0}; ${loopName}++) {\n${stmt("DO")}}\n`;
    }
    case"jsblock_for":{
      const variable=safeIdentifier(block.getFieldValue("VAR"),"i");
      const suffix=String(block.id).replace(/[^A-Za-z0-9_$]/g,"_");
      const step=`__jsblockStep_${suffix}`;
      const end=`__jsblockEnd_${suffix}`;
      return `for (let ${variable} = ${val("START")}, ${step} = ${val("STEP")}, ${end} = ${val("END")}; ${step} !== 0 && (${step} > 0 ? ${variable} <= ${end} : ${variable} >= ${end}); ${variable} += ${step}) {\n${stmt("DO")}}\n`;
    }
    case"jsblock_while":return `while (${val("COND")}) {\n${stmt("DO")}}\n`;
    case"wait":return `await new Promise(resolve => setTimeout(resolve, ${Number(block.getFieldValue("MS"))||0}));\n`;
    case"function":return `async function ${functionName(block)}(${block.getFieldValue("ARGS")||""}) {\n${stmt("DO")}}\n`;
    case"return":return `return ${val("VALUE")};\n`;
    case"comment":return `// ${block.getFieldValue("TEXT")||""}\n`;
    case"js_source":return block.getFieldValue("CODE")||"";
    case"jsblock_text":return [JSON.stringify(block.getFieldValue("TEXT")||""),JS.ORDER_ATOMIC];
    case"jsblock_compare":return [`(${val("A")} ${block.getFieldValue("OP")} ${val("B")})`,JS.ORDER_ATOMIC];
    case"jsblock_logic":return [`(${val("A")} ${block.getFieldValue("OP")} ${val("B")})`,JS.ORDER_ATOMIC];
    case"jsblock_not":return [`!(${val("VALUE")})`,JS.ORDER_ATOMIC];
    case"number":return [String(Number(block.getFieldValue("N"))||0),JS.ORDER_ATOMIC];
    case"boolean":return [block.getFieldValue("V")||"true",JS.ORDER_ATOMIC];
    case"math":return [`(${val("A")} ${block.getFieldValue("OP")} ${val("B")})`,JS.ORDER_ATOMIC];
    case"jsblock_array":return [jsonLiteral(block,"ITEMS","[]"),JS.ORDER_ATOMIC];
    case"jsblock_array_get":return [`(${val("ARRAY")})[${val("INDEX")}]`,JS.ORDER_ATOMIC];
    case"jsblock_array_length":return [`(${val("ARRAY")}).length`,JS.ORDER_ATOMIC];
    case"jsblock_array_push":return `(${val("ARRAY")}).push(${val("VALUE")});\n`;
    case"jsblock_object":return [`(${jsonLiteral(block,"PROPERTIES","{}")})`,JS.ORDER_ATOMIC];
    case"jsblock_property_get":return [`(${val("OBJECT")})[${val("KEY")}]`,JS.ORDER_ATOMIC];
    case"jsblock_property_set":return `(${val("OBJECT")})[${val("KEY")}] = ${val("VALUE")};\n`;
    case"jsblock_string_method":return [`(${val("TEXT")}).${block.getFieldValue("METHOD")}()`,JS.ORDER_FUNCTION_CALL];
    case"jsblock_string_contains":return [`(${val("TEXT")}).includes(${val("SEARCH")})`,JS.ORDER_FUNCTION_CALL];
    case"jsblock_string_length":return [`(${val("TEXT")}).length`,JS.ORDER_ATOMIC];
    case"query":return [`document.querySelector(${val("SEL")})`,JS.ORDER_ATOMIC];
    case"click":return `${val("ELEMENT")}.addEventListener("click", async () => {\n${stmt("DO")}});\n`;
    case"variable_change":return `${variableName(block)} ${block.getFieldValue("DIR")||"+"}= ${val("DELTA")};\n`;
    case"game_loop":{
      const frameName=`__jsblockFrame_${String(block.id).replace(/[^A-Za-z0-9_$]/g,"_")}`;
      return `const ${frameName} = async time => {\n  const deltaTime = ${frameName}.lastTime ? time - ${frameName}.lastTime : 16;\n  ${frameName}.lastTime = time;\n${stmt("DO")}  requestAnimationFrame(${frameName});\n};\nrequestAnimationFrame(${frameName});\n`;
    }
    case"clear_canvas":return `ctx.fillStyle = ${val("COLOR")};\nctx.fillRect(0, 0, canvas.width, canvas.height);\n`;
    case"draw_rect":return `ctx.fillStyle = ${val("COLOR")};\nctx.fillRect(${val("X")}, ${val("Y")}, ${val("W")}, ${val("H")});\n`;
    case"draw_circle":return `ctx.beginPath();\nctx.arc(${val("X")}, ${val("Y")}, ${val("R")}, 0, Math.PI * 2);\nctx.fillStyle = ${val("COLOR")};\nctx.fill();\n`;
    case"draw_text":return `ctx.fillStyle = ${val("COLOR")};\nctx.font = ${val("SIZE")} + "px monospace";\nctx.fillText(${val("TEXT")}, ${val("X")}, ${val("Y")});\n`;
    case"key_down":return [`keys.has(String(${val("KEY")}).toLowerCase().replace(/^ $/, "space"))`,JS.ORDER_FUNCTION_CALL];
    case"random":return [`game.random() * (${val("MAX")} - ${val("MIN")}) + ${val("MIN")}`,JS.ORDER_FUNCTION_CALL];
    case"clamp":return [`game.clamp(${val("VALUE")}, ${val("MIN")}, ${val("MAX")})`,JS.ORDER_FUNCTION_CALL];
    case"screen_size":return [block.getFieldValue("SIZE")==="height"?"game.height":"game.width",JS.ORDER_ATOMIC];
    case"rect_collision":return [`(${val("AX")} < ${val("BX")} + ${val("BW")} && ${val("AX")} + ${val("AW")} > ${val("BX")} && ${val("AY")} < ${val("BY")} + ${val("BH")} && ${val("AY")} + ${val("AH")} > ${val("BY")})`,JS.ORDER_ATOMIC];
  }
  return "";
}
Object.keys({
console_log:1,console_table:1,alert:1,variable_set:1,variable_get:1,if:1,repeat:1,jsblock_for:1,jsblock_while:1,wait:1,function:1,return:1,comment:1,js_source:1,jsblock_text:1,jsblock_compare:1,jsblock_logic:1,jsblock_not:1,number:1,boolean:1,math:1,jsblock_array:1,jsblock_array_get:1,jsblock_array_length:1,jsblock_array_push:1,jsblock_object:1,jsblock_property_get:1,jsblock_property_set:1,jsblock_string_method:1,jsblock_string_contains:1,jsblock_string_length:1,query:1,click:1,variable_change:1,game_loop:1,clear_canvas:1,draw_rect:1,draw_circle:1,draw_text:1,key_down:1,random:1,clamp:1,screen_size:1,rect_collision:1
}).forEach(t=>JS.forBlock[t]=gen);

const workspace=Blockly.inject("blocklyDiv",{
 toolbox:false,trashcan:true,scrollbars:true,zoom:{controls:true,wheel:true,startScale:.95,maxScale:1.5,minScale:.55},
 theme:Blockly.Theme.defineTheme("jsblock",{base:Blockly.Themes.Classic,componentStyles:{workspaceBackgroundColour:"#1b241d",toolboxBackgroundColour:"#202b24",flyoutBackgroundColour:"#232e26",flyoutForegroundColour:"#f3f0df",scrollbarColour:"#718452",insertionMarkerColour:"#f3f0df",insertionMarkerOpacity:.3,markerColour:"#d8ed68"}})
});
workspace.addChangeListener(updateCode);

const PROJECT_KEY="jsblock.project.v1";
let autosaveTimer;

function updateCode(){
 let code=JS.workspaceToCode(workspace);
 const hasCode=code.trim().length>0;
 const variables=[...new Set(workspace.getAllBlocks(false)
  .filter(block=>["variable_set","variable_get","variable_change"].includes(block.type))
  .map(variableName))];
 if(variables.length)code=`let ${variables.join(", ")};\n${code}`;
 document.getElementById("code").textContent=hasCode?code:"// Drag blocks into the workspace.";
 document.getElementById("status").textContent=hasCode?`${workspace.getAllBlocks(false).length} blocks`:"Ready";
}
function serializeProject(){
 return {format:"jsblock",version:1,workspace:Blockly.serialization.workspaces.save(workspace)};
}
function migrateLegacyTextBlocks(state){
 const visit=block=>{
  if(block.type==="text"&&Object.prototype.hasOwnProperty.call(block.fields||{},"TEXT"))block.type="jsblock_text";
  Object.values(block.inputs||{}).forEach(input=>{
   if(input.block)visit(input.block);
   if(input.shadow)visit(input.shadow);
  });
  if(block.next?.block)visit(block.next.block);
 };
 (state.blocks?.blocks||[]).forEach(visit);
 return state;
}
function queueAutosave(){
 clearTimeout(autosaveTimer);
 autosaveTimer=setTimeout(()=>{
  try{localStorage.setItem(PROJECT_KEY,JSON.stringify(serializeProject()))}catch(e){
   document.getElementById("status").textContent="Autosave unavailable";
  }
 },300);
}
function saveProject(){
 const project=JSON.stringify(serializeProject(),null,2);
 try{localStorage.setItem(PROJECT_KEY,project)}catch(e){}
 const url=URL.createObjectURL(new Blob([project+"\n"],{type:"application/json"}));
 const a=document.createElement("a");a.href=url;a.download="jsblock-project.jsblock";a.click();
 setTimeout(()=>URL.revokeObjectURL(url),1000);
 document.getElementById("status").textContent="Project saved";
}
function loadProject(project){
 if(project?.format!=="jsblock"||project.version!==1||!project.workspace){
  throw new Error("This is not a supported JSBlock project file.");
 }
 const previous=Blockly.serialization.workspaces.save(workspace);
 try{Blockly.serialization.workspaces.load(migrateLegacyTextBlocks(project.workspace),workspace)}catch(error){
  Blockly.serialization.workspaces.load(previous,workspace);
  throw error;
 }
 document.getElementById("status").textContent="Project opened";
}
function importJavaScript(source){
 let program,parseWarning="";
 try{program=acorn.parse(source,{ecmaVersion:"latest",sourceType:"module",allowHashBang:true})}
 catch(moduleError){
  try{program=acorn.parse(source,{ecmaVersion:"latest",sourceType:"script",allowHashBang:true,allowReturnOutsideFunction:true})}
  catch(scriptError){program=null;parseWarning=`Parser could not outline this file: ${moduleError.message}`}
 }
 const statements=[];
 const statementTypes=[];
 let cursor=0;
 if(program){
  for(const node of program.body){
   statements.push(source.slice(cursor,node.end));
   statementTypes.push(node.type);
   cursor=node.end;
  }
 }
 if(statements.length)statements[statements.length-1]+=source.slice(cursor);
 else if(source){statements.push(source);statementTypes.push(program?"JavaScript":"Unparsed JavaScript")}

 const previous=Blockly.serialization.workspaces.save(workspace);
 try{
  workspace.clear();
  let prior=null;
  for(let index=0;index<statements.length;index++){
   const block=workspace.newBlock("js_source");
   block.setFieldValue(statementTypes[index],"KIND");
   block.setFieldValue(statements[index],"CODE");
   block.initSvg();
   block.render();
   if(prior)prior.nextConnection.connect(block.previousConnection);
   else block.moveBy(40,40);
   prior=block;
  }
  Blockly.svgResize(workspace);
  updateCode();
  document.getElementById("status").textContent=parseWarning?`Imported source block. ${parseWarning}`:`Imported ${statements.length} JavaScript blocks`;
 }catch(error){
  workspace.clear();
  Blockly.serialization.workspaces.load(previous,workspace);
  throw error;
 }
}
function preparePreviewCode(source){
 let program;
 try{program=acorn.parse(source,{ecmaVersion:"latest",sourceType:"module",allowHashBang:true})}
 catch(moduleError){
  try{program=acorn.parse(source,{ecmaVersion:"latest",sourceType:"script",allowHashBang:true,allowReturnOutsideFunction:true})}
  catch(scriptError){return {code:source,skippedImports:0}}
 }
 const replacements=[];
 let skippedImports=0;
 const visitImportMeta=(node,found)=>{
  if(!node||typeof node!=="object")return;
  if(node.type==="MetaProperty"&&node.meta.name==="import"&&node.property.name==="meta")found.push({start:node.start,end:node.end,code:'({url:"about:srcdoc"})'});
  Object.values(node).forEach(value=>Array.isArray(value)?value.forEach(child=>visitImportMeta(child,found)):visitImportMeta(value,found));
 };
 for(const node of program.body){
  if(node.type==="ImportDeclaration"){
   replacements.push({start:node.start,end:node.end,code:`/* Preview cannot load module: ${node.source.value} */`});
   skippedImports++;
  }else if(node.type==="ExportAllDeclaration"){
    skippedImports++;
   replacements.push({start:node.start,end:node.end,code:"/* Module re-export omitted from preview. */"});
  }else if(node.type==="ExportNamedDeclaration"){
    if(node.source)skippedImports++;
   replacements.push({start:node.start,end:node.end,code:node.declaration?source.slice(node.declaration.start,node.end):"/* Module export list omitted from preview. */"});
  }else if(node.type==="ExportDefaultDeclaration"){
   const declaration=node.declaration;
   const code=(declaration.type==="FunctionDeclaration"||declaration.type==="ClassDeclaration")&&declaration.id
    ?source.slice(declaration.start,node.end)
    :`const __jsblockDefaultExport = (${source.slice(declaration.start,declaration.end)});`;
   replacements.push({start:node.start,end:node.end,code});
  }
 }
 let code=source;
 for(const replacement of replacements.sort((a,b)=>b.start-a.start))code=code.slice(0,replacement.start)+replacement.code+code.slice(replacement.end);
 let runnableProgram;
 try{runnableProgram=acorn.parse(code,{ecmaVersion:"latest",sourceType:"module",allowHashBang:true})}
 catch(moduleError){
  try{runnableProgram=acorn.parse(code,{ecmaVersion:"latest",sourceType:"script",allowHashBang:true,allowReturnOutsideFunction:true})}
  catch(scriptError){runnableProgram=null}
 }
 if(runnableProgram){
  const metaReplacements=[];
  visitImportMeta(runnableProgram,metaReplacements);
  for(const replacement of metaReplacements.sort((a,b)=>b.start-a.start))code=code.slice(0,replacement.start)+replacement.code+code.slice(replacement.end);
 }
 return {code,skippedImports};
}
function addBlock(type){
 const b=workspace.newBlock(type); b.initSvg(); b.render();
 const top=workspace.getTopBlocks(true);
 b.moveBy(60+Math.random()*120,60+top.length*55);
 updateCode();
}
document.querySelector(".category").addEventListener("click",event=>{
 const button=event.target.closest("[data-block],[data-template]");
 if(button?.dataset.block)addBlock(button.dataset.block);
 if(button?.dataset.template)loadGameTemplate(button.dataset.template);
});
const blockSearch=document.getElementById("blockSearch");
function filterBlockLibrary(){
 const query=blockSearch.value.trim().toLowerCase();
 const buttons=[...document.querySelectorAll(".category button[data-block],.category button[data-template]")];
 let visibleCount=0;
 buttons.forEach(button=>{
  button.hidden=!button.textContent.toLowerCase().includes(query);
  if(!button.hidden)visibleCount++;
 });
 const headings=[...document.querySelectorAll(".category .cat-title")];
 headings.forEach(heading=>{
  let hasVisibleButton=false;
  for(let sibling=heading.nextElementSibling;sibling&&!sibling.classList.contains("cat-title");sibling=sibling.nextElementSibling){
   if(sibling.matches("button")&&!sibling.hidden){hasVisibleButton=true;break}
  }
  heading.hidden=!hasVisibleButton;
 });
 document.getElementById("emptySearch").hidden=visibleCount>0||!query;
}
blockSearch.addEventListener("input",filterBlockLibrary);
function sampleBlock(type,fields={}){
 const block=workspace.newBlock(type);block.initSvg();
 Object.entries(fields).forEach(([name,value])=>block.setFieldValue(String(value),name));
 return block;
}
function sampleValue(parent,input,type,fields){
 const child=sampleBlock(type,fields);
 parent.getInput(input).connection.connect(child.outputConnection);
 return child;
}
function sampleStatement(parent,input,child){parent.getInput(input).connection.connect(child.previousConnection)}
function sampleNext(parent,child){parent.nextConnection.connect(child.previousConnection)}
function buildMovementTemplate(){
 workspace.clear();
 const initial=sampleBlock("variable_set",{NAME:"playerX"});
 sampleValue(initial,"VALUE","number",{N:300});
 const loop=sampleBlock("game_loop");
 const clear=sampleBlock("clear_canvas");
 sampleValue(clear,"COLOR","jsblock_text",{TEXT:"#232d27"});
 sampleStatement(loop,"DO",clear);
 let tail=clear;
 for(const [key,direction] of [["ArrowLeft","-"],["ArrowRight","+"]]){
  const check=sampleBlock("if");
  const pressed=sampleValue(check,"COND","key_down");
  sampleValue(pressed,"KEY","jsblock_text",{TEXT:key});
  const change=sampleBlock("variable_change",{NAME:"playerX",DIR:direction});
  const delta=sampleValue(change,"DELTA","math");
  delta.setFieldValue("*","OP");
  sampleValue(delta,"A","variable_get",{NAME:"deltaTime"});
  sampleValue(delta,"B","number",{N:0.25});
  sampleStatement(check,"DO",change);
  sampleNext(tail,check);tail=check;
 }
 const player=sampleBlock("draw_rect");
 sampleValue(player,"X","variable_get",{NAME:"playerX"});
 sampleValue(player,"Y","number",{N:145});
 sampleValue(player,"W","number",{N:42});
 sampleValue(player,"H","number",{N:42});
 sampleValue(player,"COLOR","jsblock_text",{TEXT:"#fa815b"});
 sampleNext(tail,player);tail=player;
 const ground=sampleBlock("draw_rect");
 sampleValue(ground,"X","number",{N:0});
 sampleValue(ground,"Y","number",{N:205});
 sampleValue(ground,"W","number",{N:640});
 sampleValue(ground,"H","number",{N:155});
 sampleValue(ground,"COLOR","jsblock_text",{TEXT:"#718452"});
 sampleNext(tail,ground);
 workspace.getAllBlocks(false).reverse().forEach(block=>block.render());
 initial.moveBy(35,30);loop.moveBy(35,150);
 Blockly.svgResize(workspace);updateCode();
}
const gameTemplatePrograms={
 coins:`let player = {x: 300, y: 180};
let coin = {x: game.random() * 560 + 40, y: game.random() * 280 + 40};
let score = 0;
function frame() {
  if (keys.has("arrowleft")) player.x -= 3;
  if (keys.has("arrowright")) player.x += 3;
  if (keys.has("arrowup")) player.y -= 3;
  if (keys.has("arrowdown")) player.y += 3;
  player.x = game.clamp(player.x, 12, canvas.width - 12);
  player.y = game.clamp(player.y, 12, canvas.height - 12);
  if (Math.hypot(player.x - coin.x, player.y - coin.y) < 22) {
    score++;
    coin = {x: game.random() * 560 + 40, y: game.random() * 280 + 40};
  }
  ctx.fillStyle = "#17251f"; ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#d8ed68"; ctx.beginPath(); ctx.arc(coin.x, coin.y, 9, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = "#fa815b"; ctx.fillRect(player.x - 12, player.y - 12, 24, 24);
  ctx.fillStyle = "#f3f0df"; ctx.font = "16px monospace"; ctx.fillText("COINS " + score, 16, 26);
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);`,
 dodge:`let playerX = 300, obstacles = [], score = 0, spawn = 0, previous = 0;
function frame(time) {
  const delta = Math.min((time - previous) / 16.67 || 1, 2); previous = time; spawn += delta;
  if (spawn > 38) { obstacles.push({x: game.random() * 600, y: -24, speed: 2 + game.random() * 2}); spawn = 0; }
  if (keys.has("arrowleft")) playerX -= 4 * delta;
  if (keys.has("arrowright")) playerX += 4 * delta;
  playerX = game.clamp(playerX, 16, canvas.width - 40);
  ctx.fillStyle = "#17251f"; ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#fa815b"; ctx.fillRect(playerX, 318, 28, 28);
  ctx.fillStyle = "#d8ed68";
  obstacles = obstacles.filter(item => item.y < canvas.height + 20);
  for (const item of obstacles) { item.y += item.speed * delta; ctx.fillRect(item.x, item.y, 22, 22); if (item.y > 290 && item.y < 346 && item.x < playerX + 28 && item.x + 22 > playerX) { obstacles = []; score = 0; } }
  score += delta / 60; ctx.fillStyle = "#f3f0df"; ctx.font = "16px monospace"; ctx.fillText("SURVIVE " + Math.floor(score), 16, 26);
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);`,
 stars:`let stars = Array.from({length: 90}, () => ({x: game.random() * canvas.width, y: game.random() * canvas.height, speed: 1 + game.random() * 3}));
let shipX = canvas.width / 2, shipY = canvas.height / 2;
function frame() {
  if (keys.has("arrowleft")) shipX -= 3; if (keys.has("arrowright")) shipX += 3;
  if (keys.has("arrowup")) shipY -= 3; if (keys.has("arrowdown")) shipY += 3;
  shipX = game.clamp(shipX, 12, canvas.width - 12); shipY = game.clamp(shipY, 12, canvas.height - 12);
  ctx.fillStyle = "#101820"; ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#d8ed68"; for (const star of stars) { star.y += star.speed; if (star.y > canvas.height) { star.y = 0; star.x = game.random() * canvas.width; } ctx.fillRect(star.x, star.y, 2, 2); }
  ctx.fillStyle = "#fa815b"; ctx.beginPath(); ctx.moveTo(shipX, shipY - 13); ctx.lineTo(shipX - 11, shipY + 10); ctx.lineTo(shipX + 11, shipY + 10); ctx.fill();
  ctx.fillStyle = "#f3f0df"; ctx.font = "13px monospace"; ctx.fillText("STARFIELD  ·  ARROWS TO STEER", 14, 24);
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);`
};
function loadGameTemplate(name){
 if(name==="move")buildMovementTemplate();
 else{
  const labels={coins:"Coin collector",dodge:"Falling dodge",stars:"Starfield runner"};
  workspace.clear();
  const block=sampleBlock("js_source",{KIND:`Game template: ${labels[name]}`,CODE:gameTemplatePrograms[name]});
  block.initSvg();block.render();block.moveBy(40,40);Blockly.svgResize(workspace);updateCode();
 }
 document.getElementById("status").textContent=`${name==="move"?"Player movement":({coins:"Coin collector",dodge:"Falling dodge",stars:"Starfield runner"}[name])} loaded`;
 runGame();
}

const gameFrame=document.getElementById("gameFrame");
let frameRunId=0;
let lastGameCode="";
const sandboxDocument=`<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'unsafe-inline' 'unsafe-eval'; style-src 'unsafe-inline'; img-src data: blob:; connect-src 'none'; object-src 'none'; form-action 'none'; base-uri 'none'"><style>*{box-sizing:border-box}html,body{margin:0;width:100%;height:100%;overflow:hidden;background:#232d27}canvas{display:block;width:100%;height:100%;image-rendering:pixelated}</style></head><body><canvas id="game" width="640" height="360"></canvas><script>
const canvas=document.getElementById("game");
const ctx=canvas.getContext("2d");
const keys=new Set();
const game={width:canvas.width,height:canvas.height,random:Math.random,clamp:(value,min,max)=>Math.min(max,Math.max(min,value))};
let activeRunId=0;
let logWindowStarted=Date.now(),logCount=0,logLimitMessageSent=false;
const send=(kind,text)=>{
 if(kind==="log"){
  const now=Date.now();
  if(now-logWindowStarted>=1000){logWindowStarted=now;logCount=0;logLimitMessageSent=false}
  if(logCount>=80){if(!logLimitMessageSent){logLimitMessageSent=true;parent.postMessage({channel:"jsblock",kind:"log",text:"Output rate limited",runId:activeRunId},"*")}return}
  logCount++;
 }
 parent.postMessage({channel:"jsblock",kind,text:String(text),runId:activeRunId},"*");
};
const format=value=>{if(typeof value==="string")return value;try{return JSON.stringify(value)??String(value)}catch(error){return String(value)}};
["log","info","warn","error","debug"].forEach(method=>console[method]=(...args)=>send("log",args.map(format).join(" ")));
window.alert=message=>send("log","Alert: "+message);
const normalize=key=>key===" "?"space":key.toLowerCase();
window.addEventListener("keydown",event=>{keys.add(normalize(event.key));if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"," "].includes(event.key))event.preventDefault()});
window.addEventListener("keyup",event=>keys.delete(normalize(event.key)));
window.addEventListener("blur",()=>keys.clear());
window.addEventListener("error",event=>send("error",event.error?.stack||event.message));
window.addEventListener("unhandledrejection",event=>send("error",event.reason?.stack||event.reason));
window.addEventListener("message",async event=>{
 if(event.source!==parent||event.data?.channel!=="jsblock-run")return;
 activeRunId=event.data.runId;
 keys.clear();ctx.clearRect(0,0,canvas.width,canvas.height);
 try{
  const execute=new Function("canvas","ctx","keys","game",'"use strict";return (async()=>{const module={exports:{}};const exports=module.exports;const require=name=>{throw new Error("CommonJS dependency unavailable in preview: "+name)};\\n'+event.data.code+'\\n})();');
  await execute(canvas,ctx,keys,game);send("started","Game running");
 }catch(error){send("error",error.stack||error.message||error)}
});
<\/script></body></html>`;
function appendOutput(text){
 const output=document.getElementById("output");
 const lines=(output.textContent?output.textContent.split("\n"):[]);
 lines.push(text);output.textContent=lines.slice(-100).join("\n");output.scrollTop=output.scrollHeight;
}
function runGame(code=document.getElementById("code").textContent){
 if(typeof code!=="string")code=document.getElementById("code").textContent;
 if(!code.trim()||code.startsWith("// Drag"))return;
 lastGameCode=code;
 const prepared=preparePreviewCode(code);
 const runId=++frameRunId;
 document.getElementById("output").textContent="Starting game...";
 document.getElementById("status").textContent="Starting preview";
 document.getElementById("stopBtn").disabled=false;
 if(prepared.skippedImports)appendOutput(`Preview skipped ${prepared.skippedImports} module import${prepared.skippedImports===1?"":"s"}; dependencies are unavailable in the offline sandbox.`);
 gameFrame.addEventListener("load",()=>{
  if(runId!==frameRunId)return;
  gameFrame.contentWindow.postMessage({channel:"jsblock-run",code:prepared.code,runId},"*");
 },{once:true});
 gameFrame.srcdoc=sandboxDocument;
}
function stopGame(){
 frameRunId++;
 gameFrame.srcdoc="<!doctype html><html><body></body></html>";
 document.getElementById("stopBtn").disabled=true;
 document.getElementById("status").textContent="Code stopped";
 document.getElementById("output").textContent="Preview stopped.";
}
function openCodeEditor(){
 const generated=document.getElementById("code").textContent;
 document.getElementById("rawCode").value=generated.startsWith("// Drag")?"":generated;
 document.getElementById("importModal").classList.add("show");
 document.getElementById("rawCode").focus();
}
function closeCodeEditor(){document.getElementById("importModal").classList.remove("show")}
window.addEventListener("message",event=>{
 if(event.source!==gameFrame.contentWindow||event.data?.channel!=="jsblock"||event.data.runId!==frameRunId)return;
 if(event.data.kind==="log")appendOutput(event.data.text);
 if(event.data.kind==="error"){
  appendOutput("Error: "+event.data.text);document.getElementById("status").textContent="Game error";
 }
 if(event.data.kind==="started")document.getElementById("status").textContent="Game running";
});

document.getElementById("newBtn").onclick=()=>{if(confirm("Clear the current project?")){workspace.clear();updateCode()}};
document.getElementById("runBtn").onclick=()=>runGame();
document.getElementById("stopBtn").onclick=stopGame;
document.getElementById("restartBtn").onclick=()=>runGame(lastGameCode||document.getElementById("code").textContent);
document.getElementById("editCodeBtn").onclick=openCodeEditor;
document.getElementById("closeModal").onclick=closeCodeEditor;
document.getElementById("runRawBtn").onclick=()=>{
 const code=document.getElementById("rawCode").value;
 if(code.trim()){closeCodeEditor();runGame(code)}
};
document.getElementById("importModal").onclick=event=>{if(event.target.id==="importModal")closeCodeEditor()};
window.addEventListener("keydown",event=>{
 const key=event.key.toLowerCase();
 const command=event.ctrlKey||event.metaKey;
 if(command&&key==="enter"){
  event.preventDefault();
  if(document.getElementById("importModal").classList.contains("show")&&event.target===document.getElementById("rawCode"))document.getElementById("runRawBtn").click();
  else if(event.shiftKey)stopGame();
  else runGame();
 }else if(command&&key==="s"){
  event.preventDefault();saveProject();
 }else if(command&&key==="/"){
  event.preventDefault();blockSearch.focus();blockSearch.select();
 }else if(event.altKey&&key==="i"){
  event.preventDefault();document.getElementById("importJsBtn").click();
 }else if(event.altKey&&key==="o"){
  event.preventDefault();document.getElementById("openBtn").click();
 }else if(key==="escape"){
  if(document.getElementById("importModal").classList.contains("show"))closeCodeEditor();
  else if(blockSearch.value){blockSearch.value="";filterBlockLibrary();blockSearch.blur()}
 }
});
document.getElementById("saveBtn").onclick=saveProject;
document.getElementById("openBtn").onclick=()=>document.getElementById("projectFile").click();
document.getElementById("importJsBtn").onclick=()=>document.getElementById("javascriptFile").click();
document.getElementById("javascriptFile").onchange=async event=>{
 const file=event.target.files[0];
 if(!file)return;
 try{importJavaScript(await file.text())}catch(error){
  document.getElementById("status").textContent=`Import failed: ${error.message}`;
 }finally{event.target.value=""}
};
document.getElementById("projectFile").onchange=async event=>{
 const file=event.target.files[0];
 if(!file)return;
 try{loadProject(JSON.parse(await file.text()))}catch(error){
  document.getElementById("status").textContent=error.message||"Could not open project";
 }finally{event.target.value=""}
};
document.getElementById("codeBtn").onclick=()=>{
 const r=document.querySelector(".right"); r.scrollIntoView({behavior:"smooth",block:"nearest"});
 document.getElementById("code").focus();
};
document.getElementById("copyBtn").onclick=async()=>{
 try{
  await navigator.clipboard.writeText(document.getElementById("code").textContent);
  document.getElementById("status").textContent="Copied!";
 }catch(error){document.getElementById("status").textContent="Clipboard unavailable"}
 setTimeout(updateCode,900);
};
document.getElementById("clearBtn").onclick=()=>document.getElementById("output").textContent="";
document.getElementById("exportBtn").onclick=()=>{
 const code=document.getElementById("code").textContent;
 const blob=new Blob([`(async () => {\n${code}\n})();\n`],{type:"text/javascript"});
 const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="jsblock-project.js";a.click();
 setTimeout(()=>URL.revokeObjectURL(a.href),1000);
};
window.addEventListener("resize",()=>Blockly.svgResize(workspace));
workspace.addChangeListener(event=>{if(!event.isUiEvent)queueAutosave()});
try{
 const saved=localStorage.getItem(PROJECT_KEY);
 if(saved)loadProject(JSON.parse(saved));
}catch(error){document.getElementById("status").textContent="Autosave could not be restored"}
updateCode();