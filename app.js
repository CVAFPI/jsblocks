const JS = javascript.javascriptGenerator;
const define = Blockly.common.defineBlocksWithJsonArray;

define([
 {type:"console_log",message0:"console.log %1",args0:[{type:"input_value",name:"VALUE"}],previousStatement:null,nextStatement:null,colour:210},
 {type:"alert",message0:"alert %1",args0:[{type:"input_value",name:"VALUE"}],previousStatement:null,nextStatement:null,colour:210},
 {type:"variable_set",message0:"set %1 to %2",args0:[{type:"field_input",name:"NAME",text:"message"},{type:"input_value",name:"VALUE"}],previousStatement:null,nextStatement:null,colour:330},
 {type:"variable_get",message0:"get %1",args0:[{type:"field_input",name:"NAME",text:"message"}],output:null,colour:330},
 {type:"if",message0:"if %1",args0:[{type:"input_value",name:"COND"}],message1:"do %1",args1:[{type:"input_statement",name:"DO"}],message2:"else %1",args2:[{type:"input_statement",name:"ELSE"}],previousStatement:null,nextStatement:null,colour:120},
 {type:"repeat",message0:"repeat %1 times",args0:[{type:"field_number",name:"N",value:10,min:0}],message1:"do %1",args1:[{type:"input_statement",name:"DO"}],previousStatement:null,nextStatement:null,colour:120},
 {type:"wait",message0:"await wait %1 ms",args0:[{type:"field_number",name:"MS",value:1000,min:0}],previousStatement:null,nextStatement:null,colour:210},
 {type:"function",message0:"function %1 (%2)",args0:[{type:"field_input",name:"NAME",text:"myFunction"},{type:"field_input",name:"ARGS",text:""}],message1:"do %1",args1:[{type:"input_statement",name:"DO"}],previousStatement:null,nextStatement:null,colour:290},
 {type:"return",message0:"return %1",args0:[{type:"input_value",name:"VALUE"}],previousStatement:null,nextStatement:null,colour:290},
 {type:"comment",message0:"// %1",args0:[{type:"field_input",name:"TEXT",text:"comment"}],previousStatement:null,nextStatement:null,colour:60},
 {type:"js_source",message0:"%1 %2",args0:[{type:"field_input",name:"KIND",text:"JavaScript"},{type:"field_input",name:"CODE",text:"console.log('hello');"}],previousStatement:null,nextStatement:null,colour:45},
 {type:"text",message0:"%1",args0:[{type:"field_input",name:"TEXT",text:"Hello world"}],output:null,colour:160},
 {type:"number",message0:"%1",args0:[{type:"field_number",name:"N",value:0}],output:null,colour:160},
 {type:"boolean",message0:"%1",args0:[{type:"field_dropdown",name:"V",options:[["true","true"],["false","false"]]}],output:null,colour:160},
 {type:"math",message0:"%1 %2 %3",args0:[{type:"input_value",name:"A"},{type:"field_dropdown",name:"OP",options:[["+","+"],["-","-"],["×","*"],["÷","/"],["===","==="],[">",">"],["<","<"] ]},{type:"input_value",name:"B"}],output:null,colour:160},
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

function gen(block){
  const val=n=>JS.valueToCode(block,n,JS.ORDER_ATOMIC)||"undefined";
  const stmt=n=>JS.statementToCode(block,n);
  switch(block.type){
    case"console_log":return `console.log(${val("VALUE")});\n`;
    case"alert":return `alert(${val("VALUE")});\n`;
    case"variable_set":return `${variableName(block)} = ${val("VALUE")};\n`;
    case"variable_get":return [variableName(block),JS.ORDER_ATOMIC];
    case"if":return `if (${val("COND")}) {\n${stmt("DO")}}${stmt("ELSE")?` else {\n${stmt("ELSE")}}`:``}\n`;
    case"repeat":{
      const loopName=`__jsblockRepeat_${String(block.id).replace(/[^A-Za-z0-9_$]/g,"_")}`;
      return `for (let ${loopName} = 0; ${loopName} < ${Number(block.getFieldValue("N"))||0}; ${loopName}++) {\n${stmt("DO")}}\n`;
    }
    case"wait":return `await new Promise(resolve => setTimeout(resolve, ${Number(block.getFieldValue("MS"))||0}));\n`;
    case"function":return `async function ${functionName(block)}(${block.getFieldValue("ARGS")||""}) {\n${stmt("DO")}}\n`;
    case"return":return `return ${val("VALUE")};\n`;
    case"comment":return `// ${block.getFieldValue("TEXT")||""}\n`;
    case"js_source":return block.getFieldValue("CODE")||"";
    case"text":return [JSON.stringify(block.getFieldValue("TEXT")||""),JS.ORDER_ATOMIC];
    case"number":return [String(Number(block.getFieldValue("N"))||0),JS.ORDER_ATOMIC];
    case"boolean":return [block.getFieldValue("V")||"true",JS.ORDER_ATOMIC];
    case"math":return [`(${val("A")} ${block.getFieldValue("OP")} ${val("B")})`,JS.ORDER_ATOMIC];
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
    case"key_down":return [`keys.has(String(${val("KEY")}).toLowerCase())`,JS.ORDER_FUNCTION_CALL];
    case"random":return [`game.random() * (${val("MAX")} - ${val("MIN")}) + ${val("MIN")}`,JS.ORDER_FUNCTION_CALL];
    case"clamp":return [`game.clamp(${val("VALUE")}, ${val("MIN")}, ${val("MAX")})`,JS.ORDER_FUNCTION_CALL];
    case"screen_size":return [block.getFieldValue("SIZE")==="height"?"game.height":"game.width",JS.ORDER_ATOMIC];
    case"rect_collision":return [`(${val("AX")} < ${val("BX")} + ${val("BW")} && ${val("AX")} + ${val("AW")} > ${val("BX")} && ${val("AY")} < ${val("BY")} + ${val("BH")} && ${val("AY")} + ${val("AH")} > ${val("BY")})`,JS.ORDER_ATOMIC];
  }
  return "";
}
Object.keys({
console_log:1,alert:1,variable_set:1,variable_get:1,if:1,repeat:1,wait:1,function:1,return:1,comment:1,js_source:1,text:1,number:1,boolean:1,math:1,query:1,click:1,variable_change:1,game_loop:1,clear_canvas:1,draw_rect:1,draw_circle:1,draw_text:1,key_down:1,random:1,clamp:1,screen_size:1,rect_collision:1
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
 try{Blockly.serialization.workspaces.load(project.workspace,workspace)}catch(error){
  Blockly.serialization.workspaces.load(previous,workspace);
  throw error;
 }
 document.getElementById("status").textContent="Project opened";
}
function importJavaScript(source){
 let program;
 try{program=acorn.parse(source,{ecmaVersion:"latest",sourceType:"module",allowHashBang:true})}
 catch(moduleError){
  try{program=acorn.parse(source,{ecmaVersion:"latest",sourceType:"script",allowHashBang:true,allowReturnOutsideFunction:true})}
  catch(scriptError){throw moduleError}
 }
 const statements=[];
 const statementTypes=[];
 let cursor=0;
 for(const node of program.body){
  statements.push(source.slice(cursor,node.end));
  statementTypes.push(node.type);
  cursor=node.end;
 }
 if(statements.length)statements[statements.length-1]+=source.slice(cursor);
 else if(source){statements.push(source);statementTypes.push("JavaScript")}

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
  document.getElementById("status").textContent=`Imported ${statements.length} JavaScript blocks`;
 }catch(error){
  workspace.clear();
  Blockly.serialization.workspaces.load(previous,workspace);
  throw error;
 }
}
function addBlock(type){
 const b=workspace.newBlock(type); b.initSvg(); b.render();
 const top=workspace.getTopBlocks(true);
 b.moveBy(60+Math.random()*120,60+top.length*55);
 updateCode();
}
document.querySelector(".category").addEventListener("click",event=>{
 const button=event.target.closest("[data-block]");
 if(button)addBlock(button.dataset.block);
});
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
function addStarterGame(){
 workspace.clear();
 const initial=sampleBlock("variable_set",{NAME:"playerX"});
 sampleValue(initial,"VALUE","number",{N:300});
 const loop=sampleBlock("game_loop");
 const clear=sampleBlock("clear_canvas");
 sampleValue(clear,"COLOR","text",{TEXT:"#232d27"});
 sampleStatement(loop,"DO",clear);
 let tail=clear;
 for(const [key,direction] of [["ArrowLeft","-"],["ArrowRight","+"]]){
  const check=sampleBlock("if");
  const pressed=sampleValue(check,"COND","key_down");
  sampleValue(pressed,"KEY","text",{TEXT:key});
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
 sampleValue(player,"COLOR","text",{TEXT:"#fa815b"});
 sampleNext(tail,player);tail=player;
 const ground=sampleBlock("draw_rect");
 sampleValue(ground,"X","number",{N:0});
 sampleValue(ground,"Y","number",{N:205});
 sampleValue(ground,"W","number",{N:640});
 sampleValue(ground,"H","number",{N:155});
 sampleValue(ground,"COLOR","text",{TEXT:"#718452"});
 sampleNext(tail,ground);
 workspace.getAllBlocks(false).reverse().forEach(block=>block.render());
 initial.moveBy(35,30);loop.moveBy(35,150);
 Blockly.svgResize(workspace);updateCode();
 document.getElementById("status").textContent="Starter game ready";
}

const gameFrame=document.getElementById("gameFrame");
let frameRunId=0;
let lastGameCode="";
const sandboxDocument=`<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'unsafe-inline' 'unsafe-eval'; style-src 'unsafe-inline'; img-src data: blob:; connect-src 'none'; object-src 'none'; form-action 'none'; base-uri 'none'"><style>*{box-sizing:border-box}html,body{margin:0;width:100%;height:100%;overflow:hidden;background:#232d27}canvas{display:block;width:100%;height:100%;image-rendering:pixelated}</style></head><body><canvas id="game" width="640" height="360"></canvas><script>
const canvas=document.getElementById("game");
const ctx=canvas.getContext("2d");
const keys=new Set();
const game={width:canvas.width,height:canvas.height,random:Math.random,clamp:(value,min,max)=>Math.min(max,Math.max(min,value))};
const send=(kind,text)=>parent.postMessage({channel:"jsblock",kind,text:String(text)},"*");
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
 keys.clear();ctx.clearRect(0,0,canvas.width,canvas.height);
 try{
  const execute=new Function("canvas","ctx","keys","game",'"use strict";return (async()=>{\\n'+event.data.code+'\\n})();');
  await execute(canvas,ctx,keys,game);send("started","Game running");
 }catch(error){send("error",error.stack||error.message||error)}
});
<\/script></body></html>`;
function appendOutput(text){
 const output=document.getElementById("output");
 const lines=(output.textContent?output.textContent.split("\\n"):[]);
 lines.push(text);output.textContent=lines.slice(-100).join("\\n");output.scrollTop=output.scrollHeight;
}
function runGame(code=document.getElementById("code").textContent){
 if(!code.trim()||code.startsWith("// Drag"))return;
 lastGameCode=code;
 const runId=++frameRunId;
 document.getElementById("output").textContent="Starting game...";
 document.getElementById("status").textContent="Starting preview";
 gameFrame.addEventListener("load",()=>{
  if(runId!==frameRunId)return;
  gameFrame.contentWindow.postMessage({channel:"jsblock-run",code},"*");
 },{once:true});
 gameFrame.srcdoc=sandboxDocument;
}
function openCodeEditor(){
 const generated=document.getElementById("code").textContent;
 document.getElementById("rawCode").value=generated.startsWith("// Drag")?"":generated;
 document.getElementById("importModal").classList.add("show");
 document.getElementById("rawCode").focus();
}
function closeCodeEditor(){document.getElementById("importModal").classList.remove("show")}
window.addEventListener("message",event=>{
 if(event.source!==gameFrame.contentWindow||event.data?.channel!=="jsblock")return;
 if(event.data.kind==="log")appendOutput(event.data.text);
 if(event.data.kind==="error"){
  appendOutput("Error: "+event.data.text);document.getElementById("status").textContent="Game error";
 }
 if(event.data.kind==="started")document.getElementById("status").textContent="Game running";
});

document.getElementById("newBtn").onclick=()=>{if(confirm("Clear the current project?")){workspace.clear();updateCode()}};
document.getElementById("starterBtn").onclick=addStarterGame;
document.getElementById("runBtn").onclick=()=>runGame();
document.getElementById("restartBtn").onclick=()=>runGame(lastGameCode||document.getElementById("code").textContent);
document.getElementById("editCodeBtn").onclick=openCodeEditor;
document.getElementById("closeModal").onclick=closeCodeEditor;
document.getElementById("runRawBtn").onclick=()=>{
 const code=document.getElementById("rawCode").value;
 if(code.trim()){closeCodeEditor();runGame(code)}
};
document.getElementById("importModal").onclick=event=>{if(event.target.id==="importModal")closeCodeEditor()};
window.addEventListener("keydown",event=>{if(event.key==="Escape")closeCodeEditor()});
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