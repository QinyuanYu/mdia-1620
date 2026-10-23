// Welcome!
//
//                                                  #    #
//                                             %%% ##   ##
//                                          %%%%% ###%🎀###
//                                         %%%%% ### %%% #
//                                       %%%%%% ### %%% ###
//                                        %%%% ## %% #######
//                                       %%%%% # %% #@#####
//                                     %%%%%% # % #########
//                                    %%%%% ##### #########
//                          ###        %% ####### #########
//                 %%% ############    ########### ########
//              %%%% ############################### #######
//            %%%%% ################################## ######
//          %%%%%% #################################### #C###
//         %%%🌸%% #####################################  ###
//         %%%%% #######################################
//        %%%%%% ############### BEANS ##################
//     % %%%%%%% ############### BEANS ##################
//      %%%%%%%%% ############## BEANS ##################
//     %%%%%%%%%% ########################################
//  %%% %%%%%%%%   ###### ################################
//    %%%%%%%%      ###### #################### ##########
// % %%%🌸%%%%        ####### ########### ###### ##########
//  %%%%%%%%%         #######  ########### ###### ########
// %%%%%%%%%%          ##### ###  ######### ####### ######
//  %%%%%%%%%%          #### ##               ####### ####
//  %🌸%%%%%%%%%           ## #                  ##### ###
//   %%  %% % %%         # ##                      ## ###
//     %   %    %        # ###                      # ###
//                        # ###                     ## ###
//                        # ###                     ## ###
//                        # ####                   #### ##
//                       ### ###                  ##### ###
//                      ####  ###                 ####   ##
//                     #####   ###                 ##    ##
//                    #####    ####                      ###
//                     ##        ###                     ###
//                                ####                     ##
//                                 ####                    ###
//                                                         ####
//                                                          ##
//
// This is a template for your assignments and final project. You'll be setting up a stable and making
// sure it runs smoothly.
//
// Please do not create a new file for each assignment!
// Feel free to keep the headings (e.g.: "Variables"), but please delete any boilerplate
// comments. E.g.: those seen on lines 58 - 68, for example. They are usually providing directions. 
// (Your own comments, where necessary, are acceptable.)
//
// NOTE: UNLESS SPECIFIED, VARIABLE NAMING IS UP TO YOU. THERE SHOULD BE NO HARD-CODED
// NUMBERS OR STRINGS WHERE VARIBALES WOULD BE PREFERRED.

//------------------------- Seting up shop (Assignment 1) -------------------------//

// Store information about three horses in your stables.
// Each horse should have the following information associated with it:
//
// - the name of a horse at your stable
// - the age of the horse
// - what the horse likes to snack on
// - the cost to board the horse monthly
// - the fee for a late payment (monthly rate + 20%)
//
// Create a variable and use it to store the name of your stable.
// Create a variable and use it to store a message for visitors to the stable as a string. It should include the name of your stable.
// Create a variable and use it to store a message that monthly payment is late, and the amount owing. Include the name of one of your horses in the message.



let doudou = {
    name: "DouDou",
    age: 5,
    favoriteSnacks: "apples",
    monthlyFee: 1500
}

let mimi = {
    name: "MiMi",
    age: 6,
    favoriteSnacks: "oranges",
    monthlyFee: 1000
}

let nini = {
    name: "NiNi",
    age: 4,
    favoriteSnacks: "grapes",
    monthlyFee: 2000
}

let stableName = "Happy Stable";

let myHorses = [doudou, mimi, nini];




function latePayment(horse){
    return horse.monthlyFee*1.2
    };

myHorses[0].latePayment = latePayment(myHorses[0]);
myHorses[1].latePayment = latePayment(myHorses[1]);
myHorses[2].latePayment = latePayment(myHorses[2]);


let welcomeMessage = "Welcome to " + stableName + ". " + 
"Here are my horses: " + myHorses[0].name + ", " + myHorses[1].name + ", and " + myHorses[2].name + "."

console.log(welcomeMessage)

let delayMessage = "I'm sorry to inform you that the monthly payment for " +
myHorses[0].name + " is late. Please pay " + latePayment(myHorses[0]) + " dollars."

console.log(delayMessage)


let horse = "doudou"


let horse = "nini"



