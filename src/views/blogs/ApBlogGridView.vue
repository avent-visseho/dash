<template>
    <div class="layout-wrapper">
        <Topbar />

        <!-- ========== Left Sidebar Start ========== -->
        <Sidebar />
        <!-- Left Sidebar End -->

        <!-- ============================================================== -->
        <!-- Start right Content here -->
        <!-- ============================================================== -->

        <div class="main-content">

            <div class="page-content">
                <div class="container-fluid">

                    <!-- start page title -->
                    <div class="row">
                        <div class="col-12">
                            <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                                <h4 class="mb-sm-0 font-size-18">Blog Grid</h4>

                                <div class="page-title-right">
                                    <ol class="breadcrumb m-0">
                                        <li class="breadcrumb-item"><a href="javascript: void(0);">Blog</a></li>
                                        <li class="breadcrumb-item active">Blog Grid</li>
                                    </ol>
                                </div>

                            </div>
                        </div>
                    </div>
                    <!-- end page title -->

                    <div class="row align-items-center">
                        <div class="col-md-6">
                            <div class="mb-3">
                                <h5 class="card-title">Blog List <span class="text-muted fw-normal ms-2">(535)</span></h5>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="d-flex flex-wrap align-items-center justify-content-end gap-2 mb-3">
                                <div>
                                    <ul class="nav nav-pills">
                                        <li class="nav-item">
                                            <a class="nav-link" href="apps-blog-list.html" data-bs-toggle="tooltip"
                                                data-bs-placement="top" title="List"><i class="bx bx-list-ul"></i></a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link active" href="apps-blog-grid.html" data-bs-toggle="tooltip"
                                                data-bs-placement="top" title="Grid"><i class="bx bx-grid-alt"></i></a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <a href="#" class="btn btn-light"><i class="bx bx-plus me-1"></i> Add New</a>
                                </div>

                                <div class="dropdown">
                                    <a class="btn btn-link text-muted py-1 font-size-16 shadow-none dropdown-toggle"
                                        href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="bx bx-dots-horizontal-rounded"></i>
                                    </a>

                                    <ul class="dropdown-menu dropdown-menu-end">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                    <!-- end row -->

                    <div class="row">
                        <div class="col-xl-4 col-sm-6">
                            <div class="card">
                                <div class="">
                                    <img src="../../assets/images/small/img-3.jpg" alt="" class="img-fluid">
                                </div>
                                <div class="card-body">
                                    <p class="text-muted mb-2">10 Apr, 2022</p>
                                    <h5 class=""><a href="#" class="text-dark">Beautiful Day with Friends</a></h5>
                                    <p class="mb-0 font-size-15">Contrary to popular belief, Lorem Ipsum is not simply
                                        random text,a Latin professor at Hampden-Sydney College in Virginia.</p>
                                    <div class="mt-3">
                                        <a href="#" class="align-middle font-size-15">Read more <i
                                                class="mdi mdi-chevron-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <!-- end card -->
                        </div>
                        <!-- end col -->
                        <div class="col-xl-4 col-sm-6">
                            <div class="card">
                                <div class="">
                                    <img src="../../assets/images/small/img-2.jpg" alt="" class="img-fluid">
                                </div>
                                <div class="card-body">
                                    <p class="text-muted mb-2">24 May, 2022</p>
                                    <h5 class=""><a href="#" class="text-dark">Drawing a sketch</a></h5>
                                    <p class="mb-0 font-size-15">It is a long established fact that a reader will be
                                        distracted by the readable content of a page when looking at its layout.</p>
                                    <div class="mt-3">
                                        <a href="#" class="align-middle font-size-15">Read more <i
                                                class="mdi mdi-chevron-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <!-- end card -->
                        </div>
                        <!-- end col -->
                        <div class="col-xl-4 col-sm-6">
                            <div class="card">
                                <div class="">
                                    <img src="../../assets/images/small/img-1.jpg" alt="" class="img-fluid">
                                </div>
                                <div class="card-body">
                                    <p class="text-muted mb-2">12 june, 2022</p>
                                    <h5 class=""><a href="#" class="text-dark">Project discussion with team</a></h5>
                                    <p class="mb-0 font-size-15">Richard McClintock, a Latin professor at Hampden-Sydney
                                        College in Virginia, looked up one of the more obscure Latin words.</p>
                                    <div class="mt-3">
                                        <a href="#" class="align-middle font-size-15">Read more <i
                                                class="mdi mdi-chevron-right"></i></a>
                                    </div>
                                </div>
                            </div> <!-- end card -->
                        </div>
                        <!-- end col -->
                        <div class="col-xl-4 col-sm-6">
                            <div class="card">
                                <div class="">
                                    <img src="../../assets/images/small/img-4.jpg" alt="" class="img-fluid">
                                </div>
                                <div class="card-body">
                                    <p class="text-muted mb-2">10 July, 2022</p>
                                    <h5 class=""><a href="#" class="text-dark">Morning with Photoshoot</a></h5>
                                    <p class="mb-0 font-size-15">It is a long established fact that a reader will be
                                        distracted by the readable content of a page when looking at its layout.</p>
                                    <div class="mt-3">
                                        <a href="#" class="align-middle font-size-15">Read more <i
                                                class="mdi mdi-chevron-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <!-- end card -->
                        </div>
                        <!-- end col -->

                        <div class="col-xl-4 col-sm-6">
                            <div class="card">
                                <div class="">
                                    <img src="../../assets/images/small/img-3.jpg" alt="" class="img-fluid">
                                </div>
                                <div class="card-body">
                                    <p class="text-muted mb-2">16 June, 2022</p>
                                    <h5 class=""><a href="#" class="text-dark">Coffee with friends</a></h5>
                                    <p class="mb-0 font-size-15">Contrary to popular belief, Lorem Ipsum is not simply
                                        random text,a Latin professor at Hampden-Sydney College in Virginia.</p>
                                    <div class="mt-3">
                                        <a href="#" class="align-middle font-size-15">Read more <i
                                                class="mdi mdi-chevron-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <!-- end card -->
                        </div>
                        <!-- end col -->
                        <div class="col-xl-4 col-sm-6">
                            <div class="card">
                                <div class="">
                                    <img src="../../assets/images/small/img-5.jpg" alt="" class="img-fluid">
                                </div>
                                <div class="card-body">
                                    <p class="text-muted mb-2">22 May, 2022</p>
                                    <h5 class=""><a href="#" class="text-dark">Working day with our new ideas</a></h5>
                                    <p class="mb-0 font-size-15">There are many variations of passages of Lorem Ipsum
                                        available, but the majority have suffered alteration in some form, by injected
                                        humour.</p>
                                    <div class="mt-3">
                                        <a href="#" class="align-middle font-size-15">Read more <i
                                                class="mdi mdi-chevron-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <!-- end card -->
                        </div>
                        <!-- end col -->
                    </div>
                    <!-- end row -->

                    <div class="row justify-content-center mb-4">
                        <div class="col-md-3">
                            <div class="">
                                <ul class="pagination mb-sm-0">
                                    <li class="page-item disabled">
                                        <a href="#" class="page-link"><i class="mdi mdi-chevron-left"></i></a>
                                    </li>
                                    <li class="page-item">
                                        <a href="#" class="page-link">1</a>
                                    </li>
                                    <li class="page-item active">
                                        <a href="#" class="page-link">2</a>
                                    </li>
                                    <li class="page-item">
                                        <a href="#" class="page-link">3</a>
                                    </li>
                                    <li class="page-item">
                                        <a href="#" class="page-link">4</a>
                                    </li>
                                    <li class="page-item">
                                        <a href="#" class="page-link">5</a>
                                    </li>
                                    <li class="page-item">
                                        <a href="#" class="page-link"><i class="mdi mdi-chevron-right"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- end row -->

                </div> <!-- container-fluid -->
            </div>
            <!-- End Page-content -->

            <Footer />
        </div>
        <!-- end main content-->
    </div>
    <!-- END layout-wrapper -->


    <!-- Right Sidebar -->
    <div class="right-bar">
        <div data-simplebar class="h-100">
            <div class="rightbar-title d-flex align-items-center p-3">

                <h5 class="m-0 me-2">Theme Customizer</h5>

                <a href="javascript:void(0);" class="right-bar-toggle ms-auto">
                    <i class="mdi mdi-close noti-icon"></i>
                </a>
            </div>

            <!-- Settings -->
            <hr class="m-0" />

            <div class="p-4">
                <h6 class="mb-3">Layout</h6>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="layout" id="layout-vertical" value="vertical">
                    <label class="form-check-label" for="layout-vertical">Vertical</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="layout" id="layout-horizontal" value="horizontal">
                    <label class="form-check-label" for="layout-horizontal">Horizontal</label>
                </div>

                <h6 class="mt-4 mb-3 pt-2">Layout Mode</h6>

                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="layout-mode" id="layout-mode-light" value="light">
                    <label class="form-check-label" for="layout-mode-light">Light</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="layout-mode" id="layout-mode-dark" value="dark">
                    <label class="form-check-label" for="layout-mode-dark">Dark</label>
                </div>

                <h6 class="mt-4 mb-3 pt-2">Layout Width</h6>

                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="layout-width" id="layout-width-fuild" value="fuild"
                        onchange="document.body.setAttribute('data-layout-size', 'fluid')">
                    <label class="form-check-label" for="layout-width-fuild">Fluid</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="layout-width" id="layout-width-boxed" value="boxed"
                        onchange="document.body.setAttribute('data-layout-size', 'boxed')">
                    <label class="form-check-label" for="layout-width-boxed">Boxed</label>
                </div>

                <h6 class="mt-4 mb-3 pt-2">Layout Position</h6>

                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="layout-position" id="layout-position-fixed"
                        value="fixed" onchange="document.body.setAttribute('data-layout-scrollable', 'false')">
                    <label class="form-check-label" for="layout-position-fixed">Fixed</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="layout-position" id="layout-position-scrollable"
                        value="scrollable" onchange="document.body.setAttribute('data-layout-scrollable', 'true')">
                    <label class="form-check-label" for="layout-position-scrollable">Scrollable</label>
                </div>

                <h6 class="mt-4 mb-3 pt-2">Topbar Color</h6>

                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="topbar-color" id="topbar-color-light" value="light"
                        onchange="document.body.setAttribute('data-topbar', 'light')">
                    <label class="form-check-label" for="topbar-color-light">Light</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="topbar-color" id="topbar-color-dark" value="dark"
                        onchange="document.body.setAttribute('data-topbar', 'dark')">
                    <label class="form-check-label" for="topbar-color-dark">Dark</label>
                </div>

                <h6 class="mt-4 mb-3 pt-2 sidebar-setting">Sidebar Size</h6>

                <div class="form-check sidebar-setting">
                    <input class="form-check-input" type="radio" name="sidebar-size" id="sidebar-size-default"
                        value="default" onchange="document.body.setAttribute('data-sidebar-size', 'lg')">
                    <label class="form-check-label" for="sidebar-size-default">Default</label>
                </div>
                <div class="form-check sidebar-setting">
                    <input class="form-check-input" type="radio" name="sidebar-size" id="sidebar-size-compact"
                        value="compact" onchange="document.body.setAttribute('data-sidebar-size', 'md')">
                    <label class="form-check-label" for="sidebar-size-compact">Compact</label>
                </div>
                <div class="form-check sidebar-setting">
                    <input class="form-check-input" type="radio" name="sidebar-size" id="sidebar-size-small" value="small"
                        onchange="document.body.setAttribute('data-sidebar-size', 'sm')">
                    <label class="form-check-label" for="sidebar-size-small">Small (Icon View)</label>
                </div>

                <h6 class="mt-4 mb-3 pt-2 sidebar-setting">Sidebar Color</h6>

                <div class="form-check sidebar-setting">
                    <input class="form-check-input" type="radio" name="sidebar-color" id="sidebar-color-light" value="light"
                        onchange="document.body.setAttribute('data-sidebar', 'light')">
                    <label class="form-check-label" for="sidebar-color-light">Light</label>
                </div>
                <div class="form-check sidebar-setting">
                    <input class="form-check-input" type="radio" name="sidebar-color" id="sidebar-color-dark" value="dark"
                        onchange="document.body.setAttribute('data-sidebar', 'dark')">
                    <label class="form-check-label" for="sidebar-color-dark">Dark</label>
                </div>
                <div class="form-check sidebar-setting">
                    <input class="form-check-input" type="radio" name="sidebar-color" id="sidebar-color-brand" value="brand"
                        onchange="document.body.setAttribute('data-sidebar', 'brand')">
                    <label class="form-check-label" for="sidebar-color-brand">Brand</label>
                </div>

                <h6 class="mt-4 mb-3 pt-2">Direction</h6>

                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="layout-direction" id="layout-direction-ltr"
                        value="ltr">
                    <label class="form-check-label" for="layout-direction-ltr">LTR</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="layout-direction" id="layout-direction-rtl"
                        value="rtl">
                    <label class="form-check-label" for="layout-direction-rtl">RTL</label>
                </div>

            </div>

        </div> <!-- end slimscroll-menu-->
    </div>
    <!-- /Right-bar -->

    <!-- Right bar overlay-->
    <div class="rightbar-overlay"></div>
</template>

<script setup>
import Sidebar from '@/components/Sidebar.vue';
import Topbar from '@/components/Topbar.vue';
import Footer from '@/components/Footer.vue';
</script>