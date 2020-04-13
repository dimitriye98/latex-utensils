import {Location} from '../pegjs/pegjs_types'

export type TextString = {
    kind: 'text.string';
    content: string;
    location: Location;
}

export function isTextString(node: Node): node is TextString {
    return node.kind === 'text.string'
}

export type Command = {
    kind: 'command';
    name: string;
    args: (OptionalArg | Group)[];
    location: Location;
}

export function isCommand(node: Node): node is Command {
    return node.kind === 'command'
}

export type AmsMathTextCommand = {
    kind: 'command.text';
    arg: Group;
    location: Location;
}

export function isAmsMathTextCommand(node: Node): node is AmsMathTextCommand {
    return node.kind === 'command.text'
}

export type LetCommand = {
    kind: 'command.let';
    name: 'let';
    token: string;
    aliasTarget: string;
}

export function isLetCommand(node: Node): node is LetCommand {
    return node.kind === 'command.let'
}

export type DefCommand = {
    kind: 'command.def';
    name: 'def';
    token: string;
    args: (OptionalArg | CommandParameter | Group)[];
}

export function isDefCommand(node: Node): node is DefCommand {
    return node.kind === 'command.def'
}

export type Environment = {
    kind: 'env';
    name: string;
    args: (OptionalArg | Group)[];
    content: Node[];
    location: Location;
}

export function isEnvironment(node: Node): node is Environment {
    return node.kind === 'env'
}

export type MathEnv = {
    kind: 'env.math.align';
    name: string;
    args: (OptionalArg | Group)[];
    content: Node[];
    location: Location;
}

export function isMathEnv(node: Node): node is MathEnv {
    return node.kind === 'env.math.align'
}

export type MathEnvAligned = {
    kind: 'env.math.aligned';
    name: string;
    args: (OptionalArg | Group)[];
    content: Node[];
    location: Location;
}

export function isMathEnvAligned(node: Node): node is MathEnvAligned {
    return node.kind === 'env.math.aligned'
}

export type Group = {
    kind: 'arg.group';
    content: Node[];
    location: Location;
}

export function isGroup(node: Node): node is Group {
    return node.kind === 'arg.group'
}

export type OptionalArg = {
    kind: 'arg.optional';
    content: Node[];
    location: Location;
}

export function isOptionalArg(node: Node): node is OptionalArg {
    return node.kind === 'arg.optional'
}

export type Parbreak = {
    kind: 'parbreak';
    location: Location;
}

export function isParbreak(node: Node): node is Parbreak {
    return node.kind === 'parbreak'
}

export type Superscript = {
    kind: 'superscript';
    content: Node[];
    location: Location;
}

export function isSuperscript(node: Node): node is Superscript {
    return node.kind === 'superscript'
}

export type Subscript = {
    kind: 'subscript';
    content: Node[];
    location: Location;
}

export function isSubscript(node: Node): node is Subscript {
    return node.kind === 'subscript'
}

export type AlignmentTab = {
    kind: 'alignmentTab';
    location: Location;
}

export function isAlignmentTab(node: Node): node is AlignmentTab {
    return node.kind === 'alignmentTab'
}

export type CommandParameter = {
    kind: 'commandParameter';
    nargs: string;
    location: Location;
}

export function isCommandParameter(node: Node): node is CommandParameter {
    return node.kind === 'commandParameter'
}

export type ActiveCharacter = {
    kind: 'activeCharacter';
    location: Location;
}

export function isActiveCharacter(node: Node): node is ActiveCharacter {
    return node.kind === 'activeCharacter'
}

export type Ignore = {
    kind: 'ignore';
    location: Location;
}

export function isIgnore(node: Node): node is Ignore {
    return node.kind === 'ignore'
}

export type Verb = {
    kind: 'verb';
    name: string;
    escape: string;
    content: string;
    location: Location;
}

export function isVerb(node: Node): node is Verb {
    return node.kind === 'verb'
}

export type Verbatim = {
    kind: 'env.verbatim';
    name: string;
    content: string;
    location: Location;
}

export function isVerbatim(node: Node): node is Verbatim {
    return node.kind === 'env.verbatim'
}

export type Minted = {
    kind: 'env.minted';
    name: 'minted';
    args: (OptionalArg | Group)[];
    content: string;
    location: Location;
}

export function isMinted(node: Node): node is Minted {
    return node.kind === 'env.minted'
}

export type Lstlisting = {
    kind: 'env.lstlisting';
    name: 'lstlisting';
    arg?: OptionalArg;
    content: string;
    location: Location;
}

export function isLstlisting(node: Node): node is Lstlisting {
    return node.kind === 'env.lstlisting'
}

export type InlienMath = {
    kind: 'inlineMath';
    content: Node[];
    location: Location;
}

export function isInlienMath(node: Node): node is InlienMath {
    return node.kind === 'inlineMath'
}

export type DisplayMath = {
    kind: 'displayMath';
    content: Node[];
    location: Location;
}

export function isDisplayMath(node: Node): node is DisplayMath {
    return node.kind === 'displayMath'
}

export type MathCharacter = {
    kind: 'math.character';
    content: string;
}

export function isMathCharacter(node: Node): node is MathCharacter {
    return node.kind === 'math.character'
}

export type MathMatchingParen = {
    kind: 'math.matching_paren';
    left: string;
    right: string;
    content: Node[];
    location: Location;
}

export function isMathMatchingParen(node: Node): node is MathMatchingParen {
    return node.kind === 'math.matching_paren'
}

export function hasContent(node: Node): node is Extract<Node, {content: any}> {
      return node.hasOwnProperty('content')
}

export function hasContentArray(node: Node): node is Extract<Node, {content: Node[]}> {
    return node.hasOwnProperty('content') && Array.isArray((node as any)['content'])
}

export function hasArgsArray(node: Node): node is Extract<Node, {args: Node[]}> {
    return node.hasOwnProperty('args') && Array.isArray((node as any)['args'])
}


export type Node
= TextString
| Command
| AmsMathTextCommand
| LetCommand
| DefCommand
| Environment
| Group
| OptionalArg
| InlienMath
| DisplayMath
| MathCharacter
| MathMatchingParen
| MathEnv
| MathEnvAligned
| Parbreak
| Superscript
| Subscript
| AlignmentTab
| CommandParameter
| ActiveCharacter
| Ignore
| Verb
| Verbatim
| Minted
| Lstlisting

export type Comment = {
    kind: 'comment';
    content: string;
    location: Location;
}

export type AstRoot = {
    kind: 'ast.root';
    content: Node[];
    comment?: Comment[];
}

export function isAstRoot(ast: LatexAst): ast is AstRoot {
    return ast.kind === 'ast.root'
}

export type AstPreamble = {
    kind: 'ast.preamble';
    content: Node[];
    comment?: Comment[];
    rest: string;
}

export function isAstPreamble(ast: LatexAst): ast is AstPreamble {
    return ast.kind === 'ast.preamble'
}

export type LatexAst = AstRoot | AstPreamble
