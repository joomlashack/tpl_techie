
<?php
/**
 * @package     Techie
 * @subpackage  Template File
 *
 * @copyright   Copyright (C) 2005 - 2016 Joomlashack. Meritage Assets.  All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 *
 * Do not edit this file directly. You can copy it and create a new file called
 * 'custom.php' in the same folder, and it will override this file. That way
 * if you update the template ever, your changes will not be lost.
 */
// no direct access
defined('_JEXEC') or die('Restricted access');
?>
<doctype>
	<html>
		<head>
			<w:head />
			<link href='https://fonts.googleapis.com/css?family=Varela+Round' rel='stylesheet' type='text/css'>
			<link href='https://fonts.googleapis.com/css?family=Quattrocento+Sans:400,700' rel='stylesheet' type='text/css'>
		</head>
		<body class="<?php   echo $responsive ?>">
			<!-- toolbar -->
			<?php if ($techieLateralMenu) : ?>
			<div class="techie-container">
			<?php endif ?>
			<?php if ($this->countModules('toolbar')) : ?>
			<w:nav containerClass="<?php echo $containerClass ?>" rowClass="<?php echo $gridMode; ?>" wrapClass="navbar-fixed-top navbar-inverse" type="toolbar" name="toolbar" />
			<?php endif; ?>
			<!-- toolbar end -->
			<!-- header -->
			<header id="header" class="techieBackground <?php echo (!$techieSlideshow ? '' : 'techieSlideshow');  ?>">
				<div class="top-object"></div>
				<!-- logo -->
				<div class="<?php echo $containerClass ?>">
					<div class="header-inner">
						<w:logo name="top"/>
						<?php if ($techieLateralMenu && $this->countModules('lateral-menu') ) : ?>
						<div class="toolbar-collapse-btn">
							<div class="legend-menu">MENU</div>
							<div class="menu-icons-container">
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</div>
						</div>
						 <?php endif ?>
						<div class="clear"></div>
					</div>
					<?php if (!$techieSlideshow) : ?>
						<?php if ($showTitlePage) : ?>
							<div id="current-menu-item"><h1><?php echo $menu_itemActive; ?></h1></div>
						<?php endif; ?>
					<?php else: ?>
						<div class="<?php echo $containerClass ?> slide-arrows-container">
							<a id="prevslide" class="load-item"></a>
				            <a id="nextslide" class="load-item"></a>
				            <div id="slide-text-element">
							</div>
						</div>
					<?php endif; ?>

					<!-- logo end -->
				</div>
			</header>
			<!-- header end -->
			<!-- top -->
			<?php if ($this->countModules('top')) : ?>
			<div id="top-header">
				<div class="<?php echo $containerClass ?>">
					<w:module type="<?php echo $gridMode; ?>" name="top" chrome="wrightflexgrid" extradivs="module" />
				</div>
			</div>
			<?php endif; ?>
			<!-- top end -->
			<!-- breadcrumbs -->
			<?php if ($this->countModules('breadcrumbs')) : ?>
			<div id="breadcrumbs">
				<div class="<?php echo $containerClass ?>">
					<div class="<?php echo $gridMode; ?>">
						<div class="span12">
							<w:module type="single" name="breadcrumbs" chrome="none" />
						</div>
					</div>
				</div>
			</div>
			<?php endif; ?>
			<!-- breadcrumbs end -->
			<!-- Main container -->
				<!-- Featured -->
				<?php if ($this->countModules('featured')) : ?>
				<div class="<?php echo $containerClass ?>">
                <div id="featured">
                	<w:module type="none" name="featured" chrome="xhtml" />
				</div>
				</div>
                <?php endif; ?>
                <!-- Featured end -->
				<!-- grid-top -->
				<?php if ($this->countModules('grid-top')) : ?>
				<div id="grid-top">
				<div class="<?php echo $containerClass ?>">
					<w:module type="row-fluid" name="grid-top" chrome="wrightflexgrid" extradivs="module" />
				</div>
				</div>
				<?php endif; ?>
				<!-- grid-top end -->
				<!-- grid-top2 -->
				<?php if ($this->countModules('grid-top2')) : ?>
				<!-- grid-top2 -->
				<div id="grid-top2">
					<div class="<?php echo $containerClass ?>">
					<w:module type="<?php echo $gridMode; ?>" name="grid-top2" chrome="wrightflexgrid" extradivs="module" />
				</div>
				</div>
				<?php endif; ?>
				<!-- grid-top2 end -->
				<?php if ($this->countModules('content') || $this->countModules('content2')) : ?>
				<div id="content-wrapper">
				<?php endif; ?>
				<!-- content -->
				<?php if ($this->countModules('content')) : ?>
				<div id="content">
					<div class="<?php echo $containerClass ?>">
					<w:module type="<?php echo $gridMode; ?>" name="content" chrome="wrightflexgrid" extradivs="module" />
					</div>
				</div>
				<?php endif; ?>
				<!-- content end -->
				<!-- content2 -->
				<?php if ($this->countModules('content2')) : ?>
				<div id="content2">
				<div class="<?php echo $containerClass ?>">
					<w:module type="<?php echo $gridMode; ?>" name="content2" chrome="wrightflexgrid" extradivs="module" />
				</div>
				</div>
				<?php endif; ?>
				<!-- content2 end -->
				<?php if ($this->countModules('content') || $this->countModules('content2')) : ?>
				</div>
				<?php endif; ?>
				<div class="<?php echo $containerClass ?>">
				<div id="main-content" class="<?php echo $gridMode; ?>">
					<!-- sidebar1 -->
					<aside id="sidebar1">
						<w:module name="sidebar1" chrome="xhtml" />
					</aside>
					<!-- sidebar1 end -->
					<!-- main -->
					<section id="main">
						<?php if ($this->countModules('above-content')) : ?>
						<!-- above-content -->
						<div id="above-content">
						<w:module type="none" name="above-content" chrome="xhtml" />
						</div>
						<?php endif; ?>
						<!-- above-content end -->
						<!-- component -->
						<w:content />
						<!-- component end -->
						<!-- below-content -->
						<?php if ($this->countModules('below-content')) : ?>
						<div id="below-content">
							<w:module type="none" name="below-content" chrome="xhtml" />
						</div>
						<?php endif; ?>
						<!-- below-content end -->
					</section>
					<!-- main end -->
					<!-- sidebar2 -->
					<aside id="sidebar2">
						<w:module name="sidebar2" chrome="xhtml" />
					</aside>
					<!-- sidebar2 end -->
				</div>
				</div>
			<!-- main container end -->
				<!-- grid-bottom -->
				<?php if ($this->countModules('grid-bottom')) :	?>
				<div id="grid-bottom" >
					<div class="<?php echo $containerClass ?>">
					<w:module type="<?php echo $gridMode; ?>" name="grid-bottom" chrome="wrightflexgrid" extradivs="module" />
					</div>
				</div>
				<?php endif; ?>
				<!-- grid-bottom end -->
				<!-- grid-bottom2 -->
				<?php if ($this->countModules('grid-bottom2')) : ?>
				<div id="grid-bottom2" >
				<div class="<?php echo $containerClass ?>">
					<w:module type="<?php echo $gridMode; ?>" name="grid-bottom2" chrome="wrightflexgrid" extradivs="module" />
				</div>
				</div>
				<?php endif; ?>
				<!-- grid-bottom2 end -->
			<?php if ($techieLateralMenu) : ?>
			</div>
			<?php endif ?>
			<!-- footer -->
			<div class="wrapper-footer">
				<footer id="footer" <?php if ($this->params->get('stickyFooter',1)) : ?> class="sticky" <?php endif; ?> >
					<!-- bottom-menu -->
					<?php if ($this->countModules('bottom-menu')) : ?>
					<w:nav containerClass="<?php echo $containerClass ?>" rowClass="<?php echo $gridMode; ?>" name="bottom-menu" wrapClass="navbar-transparent" />
					<?php endif; ?>
					<!-- bottom-menu end -->
					<div class="<?php echo $containerClass ?> footer-content">
						<?php if ($this->countModules('footer')) : ?>
						<w:module type="<?php echo $gridMode; ?>" name="footer" chrome="wrightflexgrid" />
						<?php endif; ?>
						<w:footer />
					</div>
				</footer>
			</div>
			<!-- footer end -->
			<!-- lateral-menu -->
			<?php if ($this->countModules('lateral-menu') && $techieLateralMenu) : ?>
			<div id="lateral-menu">
			<w:module type="single" name="lateral-menu" chrome="xhtml" extradivs="module" />
			</div>
			<?php endif; ?>
			<!-- lateral-menu end -->

			<?php if (!$techieSlideshow && $headerHeight != '328'): ?>
			<style type="text/css">
			#header {
				min-height: <?php echo $headerHeight . 'px'; ?>;
			}
			</style>
			<?php endif; ?>
	        <script type="text/javascript" src="<?php echo JURI::root(true) ?>/templates/js_techie/js/jquery.easing.min.js"></script>
	        <script type="text/javascript" src="<?php echo JURI::root(true) ?>/templates/js_techie/js/supersized.min.js"></script>
	        <script type="text/javascript" src="<?php echo JURI::root(true) ?>/templates/js_techie/js/supersized.shutter.min.js"></script>

	        <script type="text/javascript">
	             <?php if ($bsMode) : ?>
	             var BsModeFluid = true;
	             <?php else: ?>
	             var BsModeFluid = false;
	             <?php endif; ?>

	             <?php if ($techieSlideshow) : ?>
	 			 var SlideShow = 1;
	             var slidesImgs =  <?php echo getSlideItems($techieCategorySlideShow); ?>;

	             <?php else: ?>
	             var SlideShow = 0;
	             slidesImgs = [{image : '<?php echo JURI::root(true) . $bg; ?>'}];
	             <?php endif; ?>

	        </script>

			<script type='text/javascript' src='<?php echo JURI::root(true) ?>/templates/js_techie/js/techie.js'></script>
		</body>
	</html>
</doctype>
