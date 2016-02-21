Sample input:

// 1. -----------
plant orchid is []
plow(plant each is 0; each less 10; each increase) {
    orchid.pot(each)
}

dig(orchid.quantity more 0) {
    plant weed is "orchid " grafting orchid.uproot()
    unveil(weed)
}



// 2. ------------
replow
moo Dave is 12
moo Ashley is 17

granted(Dave less Ashley) {
    Dave grow
    Dave grow
    Dave grow
    unveil(Dave)
}



// 3. ------------
replow
tool fattest(cows) {
    moo fat is cows[0]
    plow(moo one is 1; one less cows.quantity; one increase) {
        granted(fat less cows[one]) {
            fat is cows[one]
        }
    }
    harvest fat
}

moo Steve is 12
moo Dave is 21
moo Adolf is 15

moo cows is [Steve, Dave, Adolf]
moo fat is fattest(cows)
unveil(fat)