<?php

namespace app\assets;

use yii\web\AssetBundle;

/**
 * @author carson <docxcn@gmail.com>
 * @since 2.0
 */
class AppAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
        'css/app.css',
    ];
    public $js = [
        'js/app.js',
    ];
}
