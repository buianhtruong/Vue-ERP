export default {
    route: {
        dashboard: 'dashboard',
        Reports: 'Reports',
        Guide: 'Guide',
        Gym: 'Gym',
        Memberships: 'Memberships',
        Members: 'Members',
        Permissions: 'Permissions',
        PagePermission: 'Page Permission',
        RolePermission: 'Role Permission',
        DirectivePermission: 'Directive Permission',
        Settings: 'Settings',
        Payment: 'Payment',
        Oprationsys: 'Oprations',
        CompanyInfo: 'Company Info',
        Classifications: 'Classifications',
        Vendors: 'Vendors',
        PonitOfSale: 'Point Of Sale',
        NewSaleInvoice: 'New Sale Invoice',
        SalesInvoice: 'Sales Invoice',
        SalesItems: 'Sales Items',
        CashPool: 'Cash Pool',
        NewPurchaseInvoice: 'New Purchase Invoice',
        ListPurchaseInvoice: 'List Purchase Invoice',
        PurchaseItems: 'Purchase Items',
        Discount: "Discount",
        Editors: "Editors",
        BackupRestore: "BackupRestore",
        Devices: "Devices",
        Roles: "Roles",
        UploadData: "Upload Data",
        SaleInvoiceStatus: "Sales Invoice Status",
        UploadVendor: "Vendors",
        UploadItem: "Upload Item",
        UploadService: "Upload Service",
        UploadMemberShip: "Upload Membership",
        UploadMember: "Upload Member",
        UploadMembershipMovement: "Upload Membership Movement",
        UploadSaleInvoice: "Sales Invoices",
        UploadOprationsys: "System Oprations",
        Inventory: 'Inventory',
        Items: 'Items',
        ApplicationSetting: "Application Settings",
        UploadData: "Upload Data",
        ItemMove: 'Item Move',
        OrderInventory: 'Order Inventory',
        ListOrderInventory: 'List Order Inventory',
        NewOrderInventory: 'New Order Inventory',
        Inventories: 'Inventories',
        Inventory: 'Inventory',
        TreeAccount: 'Tree Account',
        EntryAccounting: 'Entry Accounting',
        NewAccountingEntry: 'New Accounting Entry',
        Sales: 'Sales',
        Purchases: 'Purchases',
        Stocktaking: 'Stocktaking',
        MenuItem: 'Menu Item',
        OriginItem: 'Origin Item',
        UnitItem: 'Unit Item',
        All: 'All',
        Accounting: 'Accounting',
        NewStock: 'New Stock',
        StockItem: 'Stock Item',
        TableAccount: "Table Account",
        Cheques: "Cheques",
        Banks: "Banks",
        Cash: "Cash",
        ListMember: "Members List",
        EditMember: "Edit Member",
        CreateMember: "Create Member",
        Permissions: "Permissions",
        PagePermission: "Page Permission",
        DirectivePermission: "Directive Permission",
        RolePermission: "Role Permission",
        MembershipMovements: "Membership Movements",
        Services: "Services",
        NewItem: "New Item",
        ListItem: "List Item",
        Drivers: "Drivers",
        NewReport: "New Report",
        ListReport: "Reports List",
        NewPaymentCashPool :"New Payment Cash Pool",
        ListCashPools :"Cash Pools List",
        NewMembershipMovementCashPool :"New Membership Movement Cash Pool",
        NewSaleInvoiceCashPool:"New Sale Invoice Cash Pool",
        CashPools :"Cash Pools",
        WorkShops :"WorkShops",
        ListWorkShop :"WorkShops List",
        NewWorkShop :"New WorkShop",
    },
    Settings: {
        settings: "Settings",
        title: "Title",
        theme: "theme",
        language: "language",
        size: "size",
        showSettings: "Show Settings",
        BusinessType: "Business Type",
        tagsView: "Tags View",
        CashDrawerCOM: "Cash Drawer COM",
        fixedHeader: "Fixed Header",
        loginBackground: "Login Background",
        showSidebar: "Show Sidebar",
        sidebarLogo: "Sidebar Logo",
        sidebarOpen: "Sidebar Open",
        showNavbar: "Show Navbar",
        showBarcode: "Show Barcode",
        WithOutCheckItemIsExist: "WithOut Check Item Is Exist",
        errorLog: "Error Log",
        datepickerQuery: "Date Picker Query",
        timeQuery: "Time Query",
        pickerOptions: "Picker Options"
    },
    navbar: {
        dashboard: 'Dashboard',
        github: 'Github',
        logOut: 'Log Out',
        Profile: 'Profile',
        theme: 'Theme',
        size: 'Global Size'
    },
    login: {
        title: 'Login Form',
        logIn: 'Login',
        username: 'Username',
        password: 'Password',
        any: 'any',
        thirdparty: 'Or connect with',
        thirdpartyTips: 'Can not be simulated on local, so please combine you own business simulation! ! !'
    },
    documentation: {
        documentation: 'Documentation',
        github: 'Github Repository'
    },
    permission: {
        addRole: 'New Role',
        editPermission: 'Edit',
        roles: 'Your roles',
        switchRoles: 'Switch roles',
        tips: 'In some cases, using v-permission will have no effect. For example: Element-UI  el-tab or el-table-column and other scenes that dynamically render dom. You can only do this with v-if.',
        delete: 'Delete',
        confirm: 'Confirm',
        cancel: 'Cancel'
    },
    guide: {
        description: 'The guide page is useful for some people who entered the project for the first time. You can briefly introduce the features of the project.',
        button: 'Show Guide'
    },
    components: {
        documentation: 'Documentation',
        tinymceTips: 'Rich text is a core feature of the management backend, but at the same time it is a place with lots of pits. In the process of selecting rich texts, I also took a lot of detours. The common rich texts on the market have been basically used, and I finally chose Tinymce. See the more detailed rich text comparison and introduction.',
        dropzoneTips: 'Because my business has special needs, and has to upload images to qiniu, so instead of a third party, I chose encapsulate it by myself. It is very simple, you can see the detail code in @/components/Dropzone.',
        stickyTips: 'when the page is scrolled to the preset position will be sticky on the top.',
        backToTopTips1: 'When the page is scrolled to the specified position, the Back to Top button appears in the lower right corner',
        backToTopTips2: 'You can customize the style of the button, show / hide, height of appearance, height of the return. If you need a text prompt, you can use element-ui el-tooltip elements externally',
        imageUploadTips: 'Since I was using only the vue@1 version, and it is not compatible with mockjs at the moment, I modified it myself, and if you are going to use it, it is better to use official version.'
    },
    table: {
        dynamicTips1: 'Fixed header, sorted by header order',
        dynamicTips2: 'Not fixed header, sorted by click order',
        dragTips1: 'The default order',
        dragTips2: 'The after dragging order',
        title: 'Title',
        importance: 'Imp',
        type: 'Type',
        remark: 'Remark',
        search: 'Search',
        add: 'Add',
        export: 'Export',
        reviewer: 'reviewer',
        id: 'ID',
        date: 'Date',
        author: 'Author',
        readings: 'Readings',
        status: 'Status',
        actions: 'Actions',
        edit: 'Edit',
        publish: 'Publish',
        draft: 'Draft',
        delete: 'Delete',
        cancel: 'Cancel',
        confirm: 'Confirm'
    },
    example: {
        warning: 'Creating and editing pages cannot be cached by keep-alive because keep-alive include does not currently support caching based on routes, so it is currently cached based on component name. If you want to achieve a similar caching effect, you can use a browser caching scheme such as localStorage. Or do not use keep-alive include to cache all pages directly. See details'
    },
    errorLog: {
        tips: 'Please click the bug icon in the upper right corner',
        description: 'Now the management system are basically the form of the spa, it enhances the user experience, but it also increases the possibility of page problems, a small negligence may lead to the entire page deadlock. Fortunately Vue provides a way to catch handling exceptions, where you can handle errors or report exceptions.',
        documentation: 'Document introduction'
    },
    excel: {
        export: 'Export',
        selectedExport: 'Export Selected Items',
        placeholder: 'Please enter the file name (default excel-list)'
    },
    zip: {
        export: 'Export',
        placeholder: 'Please enter the file name (default file)'
    },
    pdf: {
        tips: 'Here we use window.print() to implement the feature of downloading PDF.'
    },
    theme: {
        change: 'Change Theme',
        documentation: 'Theme documentation',
        tips: 'Tips: It is different from the theme-pick on the navbar is two different skinning methods, each with different application scenarios. Refer to the documentation for details.'
    },
    tagsView: {
        refresh: 'Refresh',
        close: 'Close',
        closeOthers: 'Close Others',
        closeAll: 'Close All',
        Back: 'Back',
        Copy: "Copy",
        Paste: "Paste",
        Forward: "Forward",

    },
    MinOrd: {
        SBy: "Search By Name /Number /Barcode /Category",
        Qty: "Quantity",
        TotalIn: "Total In",
        TotalOut: "Total Out",
        Balance: "Balance",
    },
    settings: {
        title: 'Page style setting',
        theme: 'Theme Color',
        tagsView: 'Open Tags-View',
        fixedHeader: 'Fixed Header',
        sidebarLogo: 'Sidebar Logo',
        PurchaseLayout: "Purchase Layout",
    },
    PanelGroup: {
        MinimumOrder: "Minimum Order",
        Receivables: "Receivables",
        Creditor: "Creditor",
        expiredItems: "expired Items",
        Total: "Total",
        Messages: "Messages",
        ActiveMembers: "Active Members",
        Members: "Members",
        Items: "Items",
        Sales: 'Sales',
        Customers: 'Customers',
        Provider: 'Provider',
        Purchases: 'Purchases'
    },
    Vendors: {
        ID: "ID",
        Vendor: 'Clients And Suppliers',
        Add: 'Add',
        Search: 'Search By Name',
        Address: 'Address',
        Email: 'Email',
        Phone1: 'Phone Number 1',
        Phone2: 'Phone Number 2',
        Fax: 'Fax',
        CreditLimit: 'Credit Limit',
        Description: 'Description',
        Status: 'Status',

    },
    AddVendors: {
        Customer: 'Customer',
        Supplier: 'Supplier',
        Name: 'Name',
        CreditLimit: 'Credit Limit',
        Fax: 'Fax',
        PhoneNumber1: 'PhoneNumber1',
        PhoneNumber2: 'PhoneNumber2',
        Email: 'Email',
        Address: 'Address',
        Description: 'Description',
        Cancel: 'Cancel',
        Save: 'Save',
        EditorName: 'Editor Name',
        Region: "Region",
    },
    Sales: {
        ByDate: 'Search By Date',
        until: 'Until',
        From: 'From',
        To: 'To',
        Date: 'Date',
        SearchBy: 'Search By Name',
        Total: 'Total Amount',
        Status: 'Status',
    },
    CashPool: {
        Save: 'Save',
        Note: 'Note: Upon posting to accounting, an accounting entry will be issued with the specified total value only',
        Invoice: 'Invoices Number',
        Cash: 'Cash Values',
        Visa: 'Visa Values',
        debt: 'Debt Values',
        Amount: 'Amount Values',
        Date: 'Date',
        Customer: 'Customer',
        Pay: 'Payment method',
        Discount: 'Discount',
        Amountv: 'Amount Value',
        Items: 'Items',
        quantity: 'Quantity',
        Price: 'Price',
        Total: 'Total',
        Memberships: 'Memberships',
        AccountInvoiceNumber: "Account Invoice Number",
        TotalCash :"Total Cash",
        TotalVisa :"Total Visa",
        TotalOutlay :"Total Outlay",
        TotalReject :"Total Reject",
        TotalRestitution :"Total Restitution",
    },
    ItemSales: {
        Name: 'Name',
        ItemName: 'Item Name',
        Date: 'Date',
        Customer: 'Customer',
        quantity: 'Sold Quantity',
        Price: 'Sale Price',
        Amountv: 'Amount Value',
    },
    NewPurchaseInvoice: {
        PurchaseInvoice: 'Purchase Invoice',
        ReleaseDate: 'Release Date',
        Date: 'Date',
        PaymentMethod: 'Payment Method',
        Cash: 'Cash',
        Receivables: 'Deferred ',
        Box: 'Box',
        ToPr: 'To Provider Account',
        Acc: 'Account',
        InvDate: 'Purchase Invoice Date',
        statement: 'Invoice Statement',
        Barcode: 'Barcode',
        Items: 'Items',
        description: 'Description',
        quantity: 'Quantity',
        Price: 'Price',
        TotalValue: 'Total Value',
        Inventory: 'Inventory',
        QuantityAmount: 'Quantity Amount',
        TotalDiscount: 'Total Discount',
        TotalJD: 'Total',
        AddMore: 'Add More',
    },
    Purchase: {
        Provider: 'Provider',
        PurchaseTotal: 'Purchase Total',
        SellingPrice: 'Selling Price',
        TotalAmount: ' Total Amount',

    },
    Items: {
        Cost: 'Cost',
        Packeges: 'Packeges',
        Retail: 'Retail',
        Origin: 'Origin',
        Group: 'Group',
        Unit: 'Unit',
        LowerOrder: 'Lower Order',
        Tax: 'Tax',
        Rate: 'Rate',
        Notes: 'Notes',
        Barcode: 'Barcode',
        Item: 'Item',
        QuantityInventory: 'Quantity Inventory',
        Status: 'Status',
        Outbound: 'Outbound',
        Incoming: 'Incoming',
        Credit: 'Credit',
        ItemName: 'Item Name',
        PurchaseCost: 'Purchase Cost',
        SellingPrice: 'Selling Price',
        ToCA: 'To Customer \ Account',
        Category: "Category"
    },
    OrderInventories: {
        OrderType: 'Order Type',
        Status: 'Status',
        Items: 'Items',
        Quantity: 'Quantity',
        Inventory: 'Inventory',
        Notes: 'Notes',
        StoreMovement: 'Store Movement',
        Statement: 'Order Statement',
        Store: 'Store',

    },

    Inventory: {
        Wharehouse: 'Stores And Wharehouses',
        StoreName: 'Store Name',
        Date: 'Date',
        OperationNote: 'Operation Note',

    },
    Classification: {
        Add: 'Add',
        Unit: 'Items Units',
        Name: 'Name',
        GroupName: 'Group Name',
        Date: 'Date',
        Notes: 'Notes',
        Status: 'Status',
        OperationNote: 'Operation Note',
        Origins: 'Origins Countries',
        OriginName: 'Origin Name',
        cancel: 'Cancel',
        UnitName: 'Unit Name',
        SearchBy: 'Search By Name',
        Address: "Address"

    },
    Stocks: {
        Barcode: 'Barcode',
        ItemName: 'Item Name',
        Definition: 'Item Definition',
        Save: 'Save',
        StoreStockTake: 'Store StockTaking',
        Statement: 'Order Statement',
        ReleaseDate: 'Release Date',
        Date: 'Date',
        Items: 'Items',
        Item: 'Item',
        Quantity: 'Quantity',
        Store: 'Store',
        Description: 'Description',
        AddMore: 'Add More',
        SearchBy: 'Search By Date',
        BondType: 'Order Bond ',
        Status: 'Status',
        ItemsQ: 'Items Quantity',

    },
    Accounting: {
        NewAccountingEntry: 'New Accounting Entry',
        AccountingEntryinquiries: 'Accounting Entry inquiries',
        Account: 'Account',
        EntryId: 'Entry ID',
        Notes: 'Notes',
        Credit: 'Credit',
        Debit: 'Debit',
        funds: 'Funds',
    },
    TreeAccount: {
        TreeAccount: 'TreeAccount',
        AccountName: 'AccountName',
        MainAccount: 'MainAccount',
        Status: 'Status',
        Credit: 'Credit',
        Debit: 'Debit',
        funds: 'funds',
        AccType: 'Account Type',
        AccName: 'Account Name',
        Code: 'Code',
        Notes: 'Notes',
        cancel: 'Cancel',
        Not: 'The Movement Account Is The Account Where The Entries Applied On It',
        Save: 'Save',
    },
    OperationSys: {
        Operations: 'Operations',
        OprationName: 'Opration Name',
        ControllerName: 'Controller Name',
        RoleName: 'Role Name',
        OprationDescription: 'Opration Description',
        ArabicOprationDescription: 'Arabic Opration Description',
        IconClass: 'Icon Class',
        ClassName: 'Class Name',
        Status: 'Status',
        ReferenceStatus: 'Reference Status',
        TableName: 'Table Name',
    },
    Members: {
        Member: 'Member',
        Add: 'Add',
        Search: 'Search',
        Status: 'Status',
        Address: 'Address',
        Gender: 'Gender',
        Email: 'Email',
        Phone1: 'Phone1',
        Phone2: 'Phone2',
        DateofBirth: 'Date Of Birth',
        CreditLimit: 'Credit Limit',
        Description: 'Description',
        Name: 'Name',
        PhoneNumber1: 'Phone Number 1',
        PhoneNumber2: 'Phone Number 2',
        Cancel: 'Cancel',
        Save: 'Save',
        TotalMembers: 'Total Members',
        MorningPrice: 'Morning Price',
        FullDayPrice: 'Full Day Price',
        Rate: 'Rate',
        Tax: 'Tax',
        Notes: 'Notes',
        Name: 'Name',
        NumberDays: 'Days Number'

    },
    Bank: {
        Banks: "Banks",
        BankName: "Bank Name",
        AccountNumber: "Account Number",
        AccountType: "Account Type",
        Currency: "Currency",
        BranchName: "Branch Name",
        IBAN: "IBAN",

    },
    Cheque: {
        Cheques: "Cheques",
        Payee: "Payee",
        FakeDate: "Date",
        ChequeAmount: "Cheque Amount",
        PaymentType: "Payment Type",
        BankName: "Bank Name",
        BankAddress: "Bank Address",
        Description: "Description",
        Currency: "Currency",
        ChequeNumber: "Cheque Number",
        Operation: "Operation",
        From: "From",
        Name: "Name",
    },
    CashDrawer: {
        CashDrawer: "Cash Drawer",
        CashNumber: "Cash Drawer Number",
        PCIP: "Computer IP",
        BTCash: "BTCash",
        Name: "Name",
        Company: "Company",
    },
    Account: {
        Account: "Account",
        Status: "Status",
        funds: "Funds",
        Debit: "Debit",
        Credit: "Credit",
        MainAccount: "Main Account",
        AccountName: "Account Name",
        Notes: "Notes",
        Code: "Code",
        AccName: "AccName",
        AccType: "AccType",
        Save: "Save",
        cancel: "Cancel",

    },
    AddMembers: {
        Female: "Female",
        Male: "Male",
        Contact: "Contact",
    },
    MemberList: {
        JOD: "JOD",
        MembershipType: "Membership Type:",
        To: "To:",
        remaining: "Remaining Days:",
        Phone: 'Phone',
        funds: "Funds:"
    },
    Report: {
        Accounting: "Accounting",
        Salesand: "Sales And Purchase",
        All: "All",
        Classification: "Classification",
        Inventory: "Inventory",
        ItemSales: "Item Sales",
        Purchase: "Purchase",
        ItemPurchase: "Item Purchase",
        Vendor: "Vendors",
        EntryAccounting: "Entry Accounting",
        Item: "Item",
        OrderInventories: "Order Inventories",
        ListItem: "List Item",
        OriginItem: "Origin Item",
        UnitItem: "Unit Item",
        TableAccount: "Table Account"

    },
    Company: {
        Name: "Name",
        NickName: "NickName",
        TaxNumber: "Tax Number",
        Logo: "Logo",
        BusinessDescription: "Business Description",
        RateNumber: "RateNumber",
        Address: "Address",
        PhoneNumber1: "PhoneNumber1",
        PhoneNumber2: "PhoneNumber2",
        Fax: "Fax",
        Email: "Email",
        Website: "Website",
        HeaderReport: "HeaderReport",
        FooterReport: "FooterReport",
        Edit: "Edit"
    },
    Backup: {
        DataBaseName: "DataBase Name",
        DateTime: "Date Time",
        UserId: "User Id",
    },
    WorkShop: {
        Items: "Items",
        StartDate: "StartDate",
        EndDate: "EndDate",
        WSNumbers: "Workshops Number",
        Amount: "Total Cost",
        TAmount: "Price"

    },
    Area: {
        Areas: "Areas",
        City: "City",
        Address1: "Address 1",
        Address2: "Address 2",
        DelievryPrice: "Delievry Price"
    }
}