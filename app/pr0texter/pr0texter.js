'use strict';

angular.module('pr0texter.pr0texter', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/pr0texter', {
            templateUrl: 'pr0texter/pr0texter.html',
            controller: 'Pr0texterCtrl'
        });
    }])

    .controller('Pr0texterCtrl', ['$scope', function ($scope) {
        /*
        This function replaces all <textareas> on a page with
        instances of Textbox.io.
        */
        var instantiateTextbox = function () {
            var standardWeiss = {
                id: 'custWhite',
                text: 'Standard-Weiß',
                icon: './img/ffffff.png',
                action: function (element) {
                    var activeEditor = textboxio.getActiveEditor();
                    var selection = activeEditor.content.getSelectedText();
                    var newContent = '<span class="white">' + selection;
                    activeEditor.content.insertHtmlAtCursor(newContent);
                }
            },
                standardGrau = {
                    id: 'custGrey',
                    text: 'Standard Grau',
                    icon: './img/888888.png',
                    action: function (element) {
                        var activeEditor = textboxio.getActiveEditor();
                        var selection = activeEditor.content.getSelectedText();
                        var newContent = '<span class="standard-grau">' + selection;
                        activeEditor.content.insertHtmlAtCursor(newContent);
                    }
                },
                bewaehrtesOrange = {
                    id: 'custOrange',
                    text: 'Bewährtes Orange',
                    icon: './img/ee4d2e.png',
                    action: function (element) {
                        var activeEditor = textboxio.getActiveEditor();
                        var selection = activeEditor.content.getSelectedText();
                        var newContent = '<span class="bewaehrtes-orange">' + selection;
                        activeEditor.content.insertHtmlAtCursor(newContent);
                    }
                },
                adminOrange = {
                    id: 'custAdminOrange',
                    text: 'Admin Orange',
                    icon: './img/ff9900.png',
                    action: function (element) {
                        var activeEditor = textboxio.getActiveEditor();
                        var selection = activeEditor.content.getSelectedText();
                        var newContent = '<span class="admin-orange">' + selection;
                        activeEditor.content.insertHtmlAtCursor(newContent);
                    }
                },
                angenehmensGruen = {
                    id: 'custGreen',
                    text: 'Angenehmes Grün',
                    icon: './img/1db992.png',
                    action: function (element) {
                        var activeEditor = textboxio.getActiveEditor();
                        var selection = activeEditor.content.getSelectedText();
                        var newContent = '<span class="angenehmes-gruen">' + selection;
                        activeEditor.content.insertHtmlAtCursor(newContent);
                    }
                },
                altschwuchtelGruen = {
                    id: 'custOldfagGreen',
                    text: 'Altschwuchtel-Grün',
                    icon: './img/5bb91c.png',
                    action: function (element) {
                        var activeEditor = textboxio.getActiveEditor();
                        var selection = activeEditor.content.getSelectedText();
                        var newContent = '<span class="altschwuchtel-gruen">' + selection;
                        activeEditor.content.insertHtmlAtCursor(newContent);
                    }
                },
                olivegruenDesFriedens = {
                    id: 'custOliveGreen',
                    text: 'Olivgrün des Friedens',
                    icon: './img/bfbc06.png',
                    action: function (element) {
                        var activeEditor = textboxio.getActiveEditor();
                        var selection = activeEditor.content.getSelectedText();
                        var newContent = '<span class="olivgruen-des-friedens">' + selection;
                        activeEditor.content.insertHtmlAtCursor(newContent);
                    }
                },
                megaEpischesBlau = {
                    id: 'custEpicBlue',
                    text: 'Mega-episches Blau',
                    icon: './img/008fff.png',
                    action: function (element) {
                        var activeEditor = textboxio.getActiveEditor();
                        var selection = activeEditor.content.getSelectedText();
                        var newContent = '<span class="mega-episches-blau">' + selection;
                        activeEditor.content.insertHtmlAtCursor(newContent);
                    }
                },
                klassischesPink = {
                    id: 'custClassicPink',
                    text: 'Klassisches Pink',
                    icon: './img/ff0082.png',
                    action: function (element) {
                        var activeEditor = textboxio.getActiveEditor();
                        var selection = activeEditor.content.getSelectedText();
                        var newContent = '<span class="klassisches-pink">' + selection;
                        activeEditor.content.insertHtmlAtCursor(newContent);
                    }
                },
                linkTuerkis = {
                    id: 'custLinkTuerkis',
                    text: 'Link Türkis',
                    icon: './img/75c0c7.png',
                    action: function (element) {
                        var activeEditor = textboxio.getActiveEditor();
                        var selection = activeEditor.content.getSelectedText();
                        var newContent = '<span class="link-tuerkis">' + selection;
                        activeEditor.content.insertHtmlAtCursor(newContent);
                    }
                },
                wichtelTuerkis = {
                    id: 'custWichtelTuerkis',
                    text: 'Wichtel Türkis',
                    icon: './img/1cb992.png',
                    action: function (element) {
                        var activeEditor = textboxio.getActiveEditor();
                        var selection = activeEditor.content.getSelectedText();
                        var newContent = '<span class="wichtel-tuerkis">' + selection;
                        activeEditor.content.insertHtmlAtCursor(newContent);
                    }
                },
                fliesenBraun = {
                    id: 'custFliesenBrau',
                    text: 'Fliesentisch Braun',
                    icon: './img/6c432b.png',
                    action: function (element) {
                        var activeEditor = textboxio.getActiveEditor();
                        var selection = activeEditor.content.getSelectedText();
                        var newContent = '<span class="fliesentisch-braun">' + selection;
                        activeEditor.content.insertHtmlAtCursor(newContent);
                    }
                },
                neuschwuchtelPink = {
                    id: 'neuschwuchtelPink',
                    text: 'Neuschwuchtel Pink',
                    icon: './img/e108e9.png',
                    action: function (element) {
                        var activeEditor = textboxio.getActiveEditor();
                        var selection = activeEditor.content.getSelectedText();
                        var newContent = '<span class="neuschwuchtel-pink">' + selection;
                        activeEditor.content.insertHtmlAtCursor(newContent);
                    }
                },
                coloredUnderline = {
                    id: 'custColoredUnderline',
                    text: 'Unterstrichen',
                    icon: './img/underline.png',
                    action: function (element) {
                        var activeEditor = textboxio.getActiveEditor();
                        var selection = activeEditor.content.getSelectedText();
                        var newContent = '<span class="underline-border">' + selection;
                        activeEditor.content.insertHtmlAtCursor(newContent);
                    }
                },
                removeUnderline = {
                    id: 'custRemoveUnderline',
                    text: 'Unterstrich entfernen',
                    icon: './img/underline_remove.png',
                    action: function (element) {
                        var activeEditor = textboxio.getActiveEditor();
                        var selection = activeEditor.content.getSelectedText();
                        var newContent = '<span class="no-underline-border">' + selection;
                        activeEditor.content.insertHtmlAtCursor(newContent);
                    }
                };

            textboxio.inline('#textbox', {
                paste: {
                    style: 'plain'
                },
                autosubmit: true,
                css: {
                    stylesheets: [''],
                    styles: [
                        { rule: 'h1', text: 'Überschrift 1' },
                        { rule: 'h2', text: 'Überschrift 2' },
                        { rule: 'h3', text: 'Überschrift 3' }
                    ]
                },
                codeview: {
                    enabled: true,
                    showButton: true
                },
                images: {
                    allowLocal: true
                },
                languages: ['en', 'es', 'fr', 'de', 'pt', 'zh'],
                ui: {

                    fonts: [
                        'sans-serif', 'Helvetica', 'Arial', 'Times New Roman',
                        {
                            value: '"Comic Sans MS", cursive, sans-serif',
                            text: 'Fliesenschrift'
                        }
                    ],
                    toolbar: {
                        offset: {
                            top: -75,
                            left: 0
                        },
                        items: [
                            'undo',
                            {
                                label: 'Schrift',
                                items: ['font-menu', 'font-face', 'font-size', 'font-color']
                            },
                            'style',
                            {
                                label: 'insert',
                                items: ['fileupload', 'specialchar']
                            },
                            {
                                label: 'Fett, Kursiv, Unterstrichen',
                                items: ['bold', 'italic', coloredUnderline, removeUnderline]
                            },
                            'align', 'listindent',
                            {
                                label: 'Tools',
                                items: ['usersettings']
                            },
                            {
                                label: 'pr0 Farben',
                                items: [
                                    standardWeiss,
                                    standardGrau,
                                    bewaehrtesOrange,
                                    angenehmensGruen,
                                    altschwuchtelGruen,
                                    olivegruenDesFriedens,
                                    megaEpischesBlau,
                                    klassischesPink,
                                    linkTuerkis,
                                    wichtelTuerkis,
                                    adminOrange,
                                    fliesenBraun,
                                    neuschwuchtelPink
                                ]
                            }
                        ]
                    }
                }
            });
        };

        instantiateTextbox();

    }]);