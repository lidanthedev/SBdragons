/// <reference types="../CTAutocomplete" />
/// <reference lib="es2015" />

import Settings from "./config";
import { drawBox } from "./features/betterGlowingEffect";
import { Color } from "Vigilance";
//const JColor = Java.type("java.awt.Color");
//import {
//    Window,
//    UIContainer, UIBlock, UIRoundedRectangle, UICircle, UIPoint, UIShape, UIText, UIWrappedText, UITextInput, UIImage, ScrollComponent,
//    PixelConstraint, CenterConstraint, SiblingConstraint, CramSiblingConstraint,
//    RelativeConstraint, AspectConstraint, TextAspectConstraint, ImageAspectConstraint, FillConstraint, ChildBasedSizeConstraint, ChildBasedMaxSizeConstraint, ScaledTextConstraint,
//    AdditiveConstraint, SubtractiveConstraint, MinConstraint, MaxConstraint,
//    ConstantColorConstraint, RainbowColorConstraint,
//    ScissorEffect, StencilEffect,
//    Animations
//} from "Elementa/index";

//const fadeOutDelay = 250
//function getProgressColor(name) {
//    switch (name) {
//        case "Mining": return new Color(.4, .44, .45)
//        case "Combat": return new Color(.61, .09, .07)
//        case "Foraging": return new Color(.27, .12, .02)
//        case "Fishing": return new Color(0, .67, .72)
//        case "Farming": return new Color(.04, .47, .07)
//        case "Carpentry": return new Color(.65, .31, 0)
//        case "Enchanting": return new Color(.66, 1, .15)
//        case "Alchemy": return new Color(1, .73, .13)
//        case "Rune Crafting": return new Color(.61, .22, .81)
//        default: return new Color(.4, .6, 0)
//    }
//}

//const window = new Window()

//const statsContainer = new UIContainer();
//statsContainer.setX((2).pixels(true))
//statsContainer.setWidth((150).pixels())
//statsContainer.setHeight(new ChildBasedSizeConstraint())
//window.addChild(statsContainer)

//var ui = new UIBlock(new Color(0, 0, 0, .2))
//pinned = false
//fadeOutTime = fadeOutDelay

//ui.setX((10).pixels())
//ui.setY(new AdditiveConstraint(new SiblingConstraint(), (2).pixels()))
//ui.setWidth(new RelativeConstraint())
//ui.setHeight(new AdditiveConstraint(new ChildBasedSizeConstraint(), (10).pixels()))
//ui.onMouseEnter(() => {
//    // if (Client.isInChat()) {
//    Ofirerror.setActive(true);
//    console.log(`enter`)
//    // }
//})
//ui.onMouseLeave(() => {
//    Ofirerror.setActive(false);
//    console.log(`leave`)
//})
//statsContainer.addChild(ui)
//var Ofirerror = new UITextInput("Enter your note...");
//Ofirerror.constrain{
//    // We want to occupy all of the text holder's area, but leave
//    // 2 pixels of padding on all sides.
//    x = (2).pixels(),
//    y = (2).pixels(),
//    // As we've seen before, we could have used a [RelativeConstraint] here
//    // and subtracted by 4 pixels, but this way, using a [FillConstraint] is a little easier to grasp.
//    height = FillConstraint() - (2).pixels()
//}
//Ofirerror.setX((20).pixels())
//Ofirerror.setWidth((new AdditiveConstraint(new ChildBasedSizeConstraint(), (100).pixels())))
//Ofirerror.setHeight(new ChildBasedSizeConstraint())
//ui.addChild(Ofirerror)


//Ofirerror.onMouseClick(() => {
//    console.log(`Focus`)
//    grabWindowFocus()
//})

//register('tick', () => {
//    stats.forEach(stat => {
//        stat.step()
//    })
//})

//register('renderOverlay', () => {
//    window.draw()
//    statsContainer.draw();
//    Ofirerror.draw();
//})

//register('clicked', (mouseX, mouseY, button, state) => {
//    if (!state) return
//    window.mouseClick(mouseX, mouseY, button)
//})
class TextBox {
    constructor(x=0,y=0,w=1,h=1) {
        this.inputBox = new Rectangle(Renderer.color(0, 0, 0, 65), 0, 0, 0, 0).setOutline(Renderer.color(0, 0, 0, 45), 1);
        this.input = "";
        this.ninput = "";
        this.inputText = new Text("", 0, 0);
        this.chatfo = false;
        this.cursor = "";
        this.inputlist = [];
        this.cursorindex = 0;
        this.show = false;
        this.name = "";
        this.debugcur = false;
        this.SetX(x);
        this.SetY(y);
        this.SetWidth(w);
        this.SetHeight(h);
    }
    SetX(num) {
        this.inputBox.setX(num);
        this.inputText.setX(num + 2);
    }
    SetY(num) {
        this.inputBox.setY(num);
        this.inputText.setY(num);
    }
    SetWidth(num) {
        this.inputText.setMaxWidth(num + 1)
        this.inputBox.setWidth(num)
    }
    SetHeight(num) {
        // this.inputText.setHeight(num)
        this.inputBox.setHeight(num)
    }
    Draw() {
        
        // console.log(`${this.input}`);
        this.inputText = this.inputText.setMaxLines(1);
        this.inputlist = this.ninput.split("");
        this.inputlist.splice(this.cursorindex, 0, this.cursor)
        var displayinput = this.inputlist.join("");
        this.inputText.setString(displayinput);
        // this.inputText.setString(`${this.inputText.getLines()[0]}`);
        // console.log(this.inputText.getMaxLines());
        //for (var property in displaytext) {
        //    console.log(`${property} ${displaytext[property]}`);
        //}
        
        // this.inputText.setString(displaytext[1]);
        this.inputText
            .setX(this.inputText.getX())
            .setY(this.inputText.getY())
            .setWidth(this.inputText.getWidth())
            .draw();
        this.inputBox.draw();
    }
    UpdateCursor() {
        if (this.chatfo) {
            if (this.cursorindex > this.input.length) {
                this.cursorindex = this.input.length;
            }
            //if (this.cursorindex == this.input.length) {
            //    if (this.cursor == " ") {
            //        this.cursor = "_";
            //    }
            //    else {
            //        this.cursor = " ";
            //    }
            // } else {
            if (this.cursor == "§8|§r") {
                if (this.debugcur) {
                    this.cursor = `${this.cursorindex}`;
                }
                else {
                    this.cursor = `|`;
                }

            }
            else {
                this.cursor = `§8|§r`;
            }
            // }
        }
        else {
            this.cursor = "";
        }
    }
}

//let stats = []
//class Stat {
//    constructor(name) {
//        this.ui = new UIBlock(new Color(0, 0, 0, 0))
//        this.pinned = false
//        this.fadeOutTime = fadeOutDelay

//        this.ui.setX((10).pixels())
//        this.ui.setY(new AdditiveConstraint(new SiblingConstraint(), (2).pixels()))
//        this.ui.setWidth(new RelativeConstraint())
//        this.ui.setHeight(new AdditiveConstraint(new ChildBasedSizeConstraint(), (10).pixels()))
//        this.ui.onMouseEnter(() => {
//            if (Client.isInChat()) {
//                this.showOptions()
//            }
//        })
//        this.ui.onMouseLeave(() => {
//            this.hideOptions()
//        })
//        statsContainer.addChild(this.ui)

//        this.title = new UIContainer()
//        this.title.setY((5).pixels())
//        this.title.setWidth(new RelativeConstraint())
//        this.title.setHeight((9).pixels())
//        this.ui.addChild(this.title)

//        this.name = new UIText(name)
//        this.name.setX((5).pixels())
//        this.title.addChild(this.name)

//        this.progressText = new UIContainer()
//        this.progressText.setX((5).pixels(true))
//        this.progressText.setWidth(new ChildBasedSizeConstraint())
//        this.progressText.setHeight((9).pixels())
//        this.title.addChild(this.progressText)

//        //this.input = new UITextInput("Ban?");
//        //this.input.setX((50).pixels(true))
//        //this.input.setWidth(new ChildBasedSizeConstraint())
//        //this.input.setHeight((9).pixels())
//        //this.title.addChild(this.input)

//        this.total = new UIText("")
//        this.progressText.addChild(this.total)

//        this.slash = new UIText("/")
//        this.slash.setX(new SiblingConstraint())
//        this.progressText.addChild(this.slash)

//        this.next = new UIText("")
//        this.next.setX(new SiblingConstraint())
//        this.progressText.addChild(this.next)

//        this.pinnedContainer = new UIContainer()
//        this.pinnedContainer.setX((5).pixels())
//        this.pinnedContainer.setY((12).pixels(true))
//        this.pinnedContainer.setWidth(new ChildBasedSizeConstraint())
//        this.ui.addChild(this.pinnedContainer)

//        this.pinnedBox = new UIBlock(new Color(0, 0, 0, 0))
//        this.pinnedBox.setWidth((10).pixels())
//        this.pinnedBox.setHeight((10).pixels())
//        this.pinnedBox.onMouseClick(() => {
//            this.togglePinned()
//        })
//        this.pinnedContainer.addChild(this.pinnedBox)

//        this.pinnedCheck = new UIBlock(new Color(0, 1, 0, 0))
//        this.pinnedCheck.setX(new CenterConstraint())
//        this.pinnedCheck.setY(new CenterConstraint())
//        this.pinnedCheck.setHeight(new AspectConstraint())
//        this.pinnedBox.addChild(this.pinnedCheck)
//        this.updatePinned()

//        this.pinnedText = new UIText("pinned")
//        this.pinnedText.setX((12).pixels())
//        this.pinnedText.setColor(new ConstantColorConstraint(new Color(1, 1, 1, 0.05)))
//        this.pinnedContainer.addChild(this.pinnedText)

//        this.progressBar = new UIBlock(new Color(0, 0, 0, 0.5))
//        this.progressBar.setX(new CenterConstraint())
//        this.progressBar.setY((15).pixels())
//        this.progressBar.setWidth(new RelativeConstraint(0.95))
//        this.progressBar.setHeight((10).pixels())
//        this.ui.addChild(this.progressBar)

//        this.progressBarTotal = new UIBlock(getProgressColor(name))
//        this.progressBarTotal.setWidth((0).pixels())
//        this.progressBarTotal.setHeight(new RelativeConstraint())
//        this.progressBar.addChild(this.progressBarTotal)


//        this.gainedXPContainer = new UIContainer()
//        this.gainedXPContainer.setX(
//            new MaxConstraint(
//                new AdditiveConstraint(new SiblingConstraint(), (2).pixels()),
//                (0).pixels(true)
//            )
//        )
//        this.gainedXPContainer.setWidth(new ChildBasedSizeConstraint())
//        this.progressBar.addChild(this.gainedXPContainer)

//        this.gainedXP = new UIText("+")
//        this.gainedXP.setX((-5).pixels())
//        this.gainedXP.setY((1.5).pixels())
//        this.gainedXP.setColor(new ConstantColorConstraint(new Color(1, 1, 1, .05)))
//        this.gainedXPContainer.addChild(this.gainedXP)
//    }

//    togglePinned() {
//        this.pinned = !this.pinned
//        this.updatePinned()
//    }

//    updatePinned() {
//        if (this.pinned) {
//            var animation = this.pinnedCheck.makeAnimation()
//            animation.setWidthAnimation(Animations.OUT_EXP, 0.5, (8).pixels())
//            animation.begin()
//        } else {
//            var animation = this.pinnedCheck.makeAnimation()
//            animation.setWidthAnimation(Animations.OUT_EXP, 0.5, (0).pixels())
//            animation.begin()
//        }
//    }

//    animateIn() {
//        var animation = this.ui.makeAnimation()
//        animation.setXAnimation(Animations.OUT_EXP, 1, (0).pixels())
//        animation.setColorAnimation(Animations.OUT_EXP, 1, new ConstantColorConstraint(new Color(0, 0, 0, 0.25)))
//        animation.begin()
//    }

//    animateOut() {
//        var animation = this.ui.makeAnimation()
//        animation.setXAnimation(Animations.OUT_EXP, 1, (10).pixels())
//        animation.setColorAnimation(Animations.OUT_EXP, 1, new ConstantColorConstraint(new Color(0, 0, 0, 0)))
//        animation.onCompleteRunnable(() => {
//            stats.splice(stats.indexOf(this), 1)
//            statsContainer.removeChild(this.ui)
//        })
//        animation.begin()

//        let texts = [this.name, this.total, this.slash, this.next]
//        texts.forEach(text => {
//            animation = text.makeAnimation()
//            animation.setColorAnimation(Animations.OUT_EXP, 1, new ConstantColorConstraint(new Color(1, 1, 1, 0.05)))
//            animation.begin()
//        })
//        let progress = [this.progressBar, this.progressBarTotal]
//        progress.forEach(block => {
//            color = block.getColor()
//            animation = block.makeAnimation()
//            animation.setColorAnimation(Animations.OUT_EXP, 1, new ConstantColorConstraint(new Color(color.r / 255, color.g / 255, color.b / 255, 0)))
//            animation.begin()
//        })

//    }

//    showOptions() {
//        var animation = this.ui.makeAnimation()
//        animation.setHeightAnimation(Animations.OUT_EXP, 0.5, new AdditiveConstraint(new ChildBasedSizeConstraint(), (21).pixels()))
//        animation.begin()
//        animation = this.pinnedText.makeAnimation()
//        animation.setColorAnimation(Animations.OUT_EXP, 0.5, new ConstantColorConstraint(new Color(1, 1, 1, 1)))
//        animation.begin()
//        animation = this.pinnedBox.makeAnimation()
//        animation.setColorAnimation(Animations.OUT_EXP, 0.5, new ConstantColorConstraint(new Color(0, 0, 0, 0.5)))
//        animation.begin()
//        animation = this.pinnedCheck.makeAnimation()
//        animation.setColorAnimation(Animations.OUT_EXP, 0.5, new ConstantColorConstraint(new Color(0, 1, 0, 1)))
//        animation.begin()
//    }

//    hideOptions() {
//        var animation = this.ui.makeAnimation()
//        animation.setHeightAnimation(Animations.OUT_EXP, 0.5, new AdditiveConstraint(new ChildBasedSizeConstraint(), (10).pixels()))
//        animation.begin()
//        animation = this.pinnedText.makeAnimation()
//        animation.setColorAnimation(Animations.OUT_EXP, 0.5, new ConstantColorConstraint(new Color(1, 1, 1, 0.05)))
//        animation.begin()
//        animation = this.pinnedBox.makeAnimation()
//        animation.setColorAnimation(Animations.OUT_EXP, 0.5, new ConstantColorConstraint(new Color(0, 0, 0, 0)))
//        animation.begin()
//        animation = this.pinnedCheck.makeAnimation()
//        animation.setColorAnimation(Animations.OUT_EXP, 0.5, new ConstantColorConstraint(new Color(0, 1, 0, 0)))
//        animation.begin()
//    }

//    update(gained, total, next) {
//        this.fadeOutTime = fadeOutDelay
//        if (total !== this.total.getText() || next !== this.next.getText()) {
//            this.total.setText(total)
//            this.next.setText(next)
//            this.progressBarTotal.makeAnimation().setWidthAnimation(
//                Animations.OUT_EXP, 1,
//                new RelativeConstraint(parseNumber(this.total.getText()) / parseNumber(this.next.getText()))
//            ).begin()
//            if (this.gainedXP.getText() === "+") {
//                this.gainedXP.setText("+" + gained)
//            } else {
//                this.gainedXP.setText("+" + roundTo(parseFloat(this.gainedXP.getText().replace("+", "")) + parseFloat(gained), 2))
//            }
//            var fadeIn = this.gainedXP.makeAnimation()
//            fadeIn.setXAnimation(Animations.OUT_EXP, 1, (0).pixels())
//            fadeIn.setColorAnimation(Animations.OUT_EXP, 1, new ConstantColorConstraint(new Color(1, 1, 1, 1)))
//            fadeIn.onComplete(() => {
//                var fadeOut = this.gainedXP.makeAnimation()
//                fadeOut.setXAnimation(Animations.OUT_EXP, 1, (-5).pixels())
//                fadeOut.setColorAnimation(Animations.OUT_EXP, 1, new ConstantColorConstraint(new Color(1, 1, 1, 0.05)))
//                fadeOut.onComplete(() => {
//                    this.gainedXP.setText("+")
//                })
//                fadeOut.begin()
//            })
//            fadeIn.begin()
//        }
//    }

//    step() {
//        if (this.pinned) return
//        if (Client.isInChat()) {
//            this.fadeOutTime = fadeOutDelay
//            return
//        }
//        if (this.fadeOutTime === 0) {
//            this.animateOut()
//            this.fadeOutTime = -1
//            return
//        }
//        this.fadeOutTime--
//    }
//}
//register("command", (...args) => {
//    if (args === undefined || args[0] === undefined) {
//        ChatLib.chat(`ERROR?`);
//        return;
//    }
//    newStat = true
//    stats.forEach(stat => {
//        if (stat.name.getText() === args[0]) {
//            stat.update(1, 10, 100)
//            newStat = false
//        }
//    })
//    if (newStat) {
//        var stat = new Stat(args[0])
//        stat.update(1, 1, 10)
//        stat.animateIn()
//        stats.push(stat)
//    }
//}).setName("sbdragonsgdevtest");

//function parseNumber(number) {
//    return number.replace(/,|\..*/g, "")
//}

//function roundTo(n, digits) {
//    var negative = false;
//    if (digits === undefined) {
//        digits = 0;
//    }
//    if (n < 0) {
//        negative = true;
//        n = n * -1;
//    }
//    var multiplicator = Math.pow(10, digits);
//    n = parseFloat((n * multiplicator).toFixed(11));
//    n = (Math.round(n) / multiplicator).toFixed(2);
//    if (negative) {
//        n = (n * -1).toFixed(2);
//    }
//    return n;
//}
export default TextBox;