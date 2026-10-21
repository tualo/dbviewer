<?php

namespace Tualo\Office\DBViewer\Scopes;

use Tualo\Office\Basic\Scope;

class DBViewerScope extends Scope
{
    protected static string $identifier = 'dbviewer';
    protected static array $name = [
        'EN' => 'DB Viewer',
        'DE' => 'DB Viewer',
    ];
    protected static array $description = [
        'EN' => 'View database content and edit it.',
        'DE' => 'Datenbankinhalt anzeigen und bearbeiten.',
    ];
}
