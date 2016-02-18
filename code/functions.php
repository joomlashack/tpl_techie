<?php
/**
 * @package     Techie
 * @subpackage  Functions
 *
 * @copyright   Copyright (C) 2005 - 2016 Joomlashack. Meritage Assets.  All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

// Restrict Access to within Joomla
defined('_JEXEC') or die('Restricted access');

// get the bootstrap row mode ( row / row-fluid )
$gridMode = $this->params->get('bs_rowmode','row-fluid');
$containerClass = 'container';
if ($gridMode == 'row-fluid') {
    $containerClass = 'container-fluid';
}

$responsivePage = $this->params->get('responsive','1');
$responsive = ' responsive';
if ($responsivePage == 0) {
    $responsive = ' no-responsive';
}

// get active menu item

$bg = checkImage($this->params->get("backgroundImage", ""), "templates/js_techie/images/default-bg.jpg");

if ($bg != "-1") $bg = str_replace(JPATH_BASE, '', $bg);

$JoomlaApp = JFactory::getApplication();
$menu_itemActive = $JoomlaApp->getMenu()->getActive()->title;

// Slideshow
function checkImage($img, $default) {
        if ($img == "") {
                $img = $default;
        }
        elseif ($img != "-1") {
                $img = "images/" . $img;
        }

        if ($img != "-1") {
                $img = JPATH_BASE . '/' . $img;
                if (!file_exists($img)) {
                        $img = "-1";
                }
        }

        return $img;
}
$techieSlideshow = ($this->params->get('enableSlideshow', '0') == '1' ? true : false);

function slideshowSetRutDefult($slideItem){
    $slideItemRute = str_replace(JPATH_BASE,'',$slideItem);
    return $slideItemRute;
}


//Lateral menu

$techieLateralMenu = ($this->params->get('techie_lateral_menu_displayed', '0') == '1' ? true : false);

//Bootstrap Mode

$bsMode = ($this->params->get('bs_rowmode', '0') == 'row-fluid' ? true : false);


// Dynamic slideshow

$techieCategorySlideShow = $this->params->get('slideshow_category','');

function  getSectionItems($itemsCategory) {
    $database = JFactory::getDBO();
    $sql = "SELECT * FROM #__content WHERE catid = $itemsCategory";
    $database->setQuery($sql);
    return $database->loadAssocList();
}

function getSlideItems($activeCategory) {

    $categoryItems = getSectionItems($activeCategory);

    $itemOptions = array();

    foreach ($categoryItems as $key => $item ) {
          $itemOptions[$key]['id'] = $item['id'];
          $itemOptions[$key]['content'] = strip_tags($item['introtext']);
          $itemOptions[$key]['title'] = $item['title'];
          $images = json_decode($item['images'], true);
          $itemOptions[$key]['image'] = JURI::root(true) . "/" .$images['image_intro'];
          $itemOptions[$key]['slide'] = 'slide-' . $key;
    }

    $slides  =  json_encode($itemOptions);



    return $slides;

}
