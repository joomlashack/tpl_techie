<?php
/**
 * @package     Wright
 * @subpackage  Template File
 *
 * @copyright   Copyright (C) 2005 - 2019 Joomlashack.   All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 *
 */

// No direct access
defined('_JEXEC') or die('Restricted access');

// Access template parameters
$document = JFactory::getDocument();

// Don't modify this file!
// Set your variables overrides for variables-something.less.
// These variables overrides are defined on templateDetails.xml below 'style' field
$lessCustomizationVars = array (
    '@color_two'    => $document->params->get('color_two', '#69E8A8'),
    '@color_four'    => $document->params->get('color_four', '#4A3C55')
);

// Check the selected variation style to choose between 'bamboo-dark' (default style) or 'bamboo-light'
if($document->params->get('styleVariation', 'dark') == 'dark') {
    $baseStyle = 'bamboo-dark';
}
else
{
    $baseStyle = 'bamboo-light';
}

// Run the compiler
require_once dirname(__FILE__) . '/../wright/build/less/compiler.php';
$build = new WrightLessCompiler;
$build->start($baseStyle, $lessCustomizationVars);