'use strict';

const tab = document.querySelector('.tabs-nav li');
const tabsNav = document.querySelector('.tabs-nav');
const tabsContent = document.querySelector('.tabs-content');
let currentArt = tabsContent.firstElementChild;

do {
  let el = tabsNav.appendChild(tab.cloneNode(true));
  el.addEventListener('click', tabClick);
  let a = el.querySelector('a');
  a.classList.add(currentArt.dataset.tabIcon);
  a.textContent = currentArt.dataset.tabTitle;
  currentArt = currentArt.nextElementSibling;
} while (currentArt !== null);

tabsNav.removeChild(tab);
let currentTab = tabsNav.firstElementChild;
currentTab.classList.add('ui-tabs-active');
findArticle(currentTab);

function tabClick (event) {
  currentTab.classList.remove('ui-tabs-active');
  currentTab = event.currentTarget;
  currentTab.classList.add('ui-tabs-active');
  findArticle(event.currentTarget)
}

function findArticle(tab) {
  let currentArt = tabsContent.firstElementChild;

  do {
    if (tab.querySelector('a').classList.contains(currentArt.dataset.tabIcon)) {
      currentArt.classList.remove('hidden');
    } else {
      currentArt.classList.add('hidden');
    }

    currentArt = currentArt.nextElementSibling;
  } while (currentArt !== null);
}